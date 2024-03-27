import { cleanEnv, makeValidator, port } from "envalid";
import { Env, availableEnvs } from "./types.d";
import { includes } from "./utils/array";

const env = makeValidator<Env>((s) => {
  if (includes(availableEnvs, s)) return s;
  else throw new Error("Expected valid environment value");
});

const validateEnv = () => {
  cleanEnv(process.env, {
    NODE_ENV: env(),
    PORT: port(),
  });
};

export { validateEnv };
