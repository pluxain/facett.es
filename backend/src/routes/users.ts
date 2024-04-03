import { Response, Router } from "express";
import { eq } from "drizzle-orm";
import { z } from "zod";
import { SqliteError } from "better-sqlite3";
import {
  TypedBodyRequest,
  UserLoginRequest,
  UserRegistrationRequest,
} from "../types.d";
import { emailToken, hash, salt } from "../utils/security";
import { db, schema } from "../database";
import {
  DatabaseError,
  DuplicateError,
  NoMatchError,
  NoRecordError,
} from "../database/errors";
import { InternalError } from "../errors";
import { userToJson } from "../utils/adaptors";
import { validate } from "./middlewares";

const router = Router();

const { users } = schema;

const userRegistrationRequest = z.object({
  body: z
    .object({
      email: z.string().email(),
      firstname: z.string().min(2),
      lastname: z.string().min(2),
      password: z.string().min(8),
      passwordConfirmation: z.string().min(8),
    })
    .refine((req) => req.password === req.passwordConfirmation, {
      message: "Passwords don't match", // TODO: i18n/l10n
      path: ["passwordConfirmation"],
    }),
});

const userLoginRequest = z.object({
  body: z.object({
    email: z.string().email(),
    password: z.string().min(8),
  }),
});

router.post(
  "/register",
  validate(userRegistrationRequest),
  async (req: TypedBodyRequest<UserRegistrationRequest>, res: Response) => {
    const { email, firstname, lastname, password } = req.body;
    const emailConfirmationToken = emailToken();
    const passwordSalt = salt();
    const passwordHash = hash(password, passwordSalt);
    try {
      const records = await db
        .insert(users)
        .values({
          email,
          emailConfirmationToken,
          firstname,
          lastname,
          passwordHash,
          passwordSalt,
        })
        .returning();
      res.status(201).json(userToJson(records[0]));
    } catch (err) {
      // TODO: add logging of errors
      console.error(err);
      let error = new InternalError();
      if (err instanceof SqliteError) {
        switch (err.code) {
          case "SQLITE_CONSTRAINT_UNIQUE":
            error = new DuplicateError();
            break;
          default:
            error = new DatabaseError();
        }
      }
      res.status(error.code).json(error);
    }
  },
);

router.post(
  "/login",
  validate(userLoginRequest),
  async (req: TypedBodyRequest<UserLoginRequest>, res: Response) => {
    const { email, password } = req.body;
    const records = await db.select().from(users).where(eq(users.email, email));
    if (records.length === 0) {
      const error = new NoRecordError();
      return res.status(error.code).json(error);
    }
    const user = records[0];

    const isMatch = hash(password, user.passwordSalt) === user.passwordHash;
    if (!isMatch) {
      const error = new NoMatchError();
      return res.status(error.code).json(error);
    }

    await db
      .update(users)
      .set({ lastLoginAt: new Date() })
      .where(eq(users.id, user.id));

    res.json(userToJson(user));
  },
);

export { router as users };
