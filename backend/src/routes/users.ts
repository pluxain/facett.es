import { Response, Router } from "express";
import { z } from "zod";
import { SqliteError } from "better-sqlite3";
import { TypedBodyRequest, UserRegistrationRequest } from "../types.d";
import { emailToken, hash, salt } from "../utils/security";
import { db, schema } from "../database";
import { validate } from "./middlewares";

const router = Router();

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
      const users = await db
        .insert(schema.users)
        .values({
          email,
          emailConfirmationToken,
          firstname,
          lastname,
          passwordHash,
          passwordSalt,
        })
        .returning();
      // TODO: make a JSON representation without sensitive data
      res.status(201).json(JSON.stringify(users[0]));
    } catch (err) {
      // TODO: add logging of errors
      console.error(err);
      if (err instanceof SqliteError) {
        switch (err.code) {
          case "SQLITE_CONSTRAINT_UNIQUE":
            // TODO: find an DatabaseError class system
            res.status(409).json({ code: 409, message: "Already exists" });
            break;
          default:
            res
              .status(500)
              .json({ code: 500, message: "Database Server Error" });
        }
      } else {
        res.status(500).json({ code: 500, message: "Internal Server Error" });
      }
    }
  },
);

export { router as users };
