import { Response, Router } from "express";
import { z } from "zod";
import { TypedBodyRequest, UserRegistrationRequest } from "../types.d";
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
  (req: TypedBodyRequest<UserRegistrationRequest>, res: Response) => {
    const { email, firstname, lastname, password, passwordConfirmation } =
      req.body;

    res.send(
      `OK: email: ${email}, firstname: ${firstname}, lastname: ${lastname}, password: ${password}, passwordConfirmation: ${passwordConfirmation}`,
    );
  },
);

export { router as users };
