import { Response, Router } from "express";
import { TypedBodyRequest, UserRegistrationRequest } from "../types.d";

const router = Router();

router.post(
  "/register",
  (req: TypedBodyRequest<UserRegistrationRequest>, res: Response) => {
    // TODO: validate req
    const { email, firstname, lastname, password, passwordConfirmation } =
      req.body;

    res.send(
      `OK: email: ${email}, firstname: ${firstname}, lastname: ${lastname}, password: ${password}, passwordConfirmation: ${passwordConfirmation}`,
    );
  },
);

export { router as users };
