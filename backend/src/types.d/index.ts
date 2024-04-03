import { Request } from "express";
import type { UserRecord } from "../database/types";

export const availableEnvs = ["development", "production", "test"] as const;
export type Env = (typeof availableEnvs)[number];

export type TypedBodyRequest<T> = Request<unknown, unknown, T>;

export type UserLoginRequest = {
  email: string;
  password: string;
};

export type UserRegistrationRequest = UserLoginRequest & {
  firstname: string;
  lastname: string;
  passwordConfirmation: string;
};

export type { UserRecord };
export type UserResponse = Pick<UserRecord, "id" | "firstname" | "lastname">;
