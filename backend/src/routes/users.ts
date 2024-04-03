import { Response, Router } from "express";
import { z } from "zod";
import { SqliteError } from "better-sqlite3";
import { TypedBodyRequest, UserRegistrationRequest } from "../types.d";
import { emailToken, hash, salt } from "../utils/security";
import { db, schema } from "../database";
import { DatabaseError, DuplicateError } from "../database/errors";
import { InternalError } from "../errors";
import { validate } from "./middlewares";

const router = Router();

const { users } = schema;

const record = {
  id: users.id,
  firstname: users.firstname,
  lastname: users.lastname,
};

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
        .returning(record);
      res.status(201).json(records[0]);
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

export { router as users };
