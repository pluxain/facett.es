import { Request } from "express";

export const availableEnvs = ["development", "production", "test"] as const;
export type Env = (typeof availableEnvs)[number];

export type TypedBodyRequest<T> = Request<unknown, unknown, T>;

export type UserRegistrationRequest = {
  email: string;
  firstname: string;
  lastname: string;
  password: string;
  passwordConfirmation: string;
};
