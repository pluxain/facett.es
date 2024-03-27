import { Sequelize } from "sequelize";
import { Env } from "./types.d";

const ENV: Env = (process.env.NODE_ENV as Env) ?? "development";

const db = new Sequelize({
  dialect: "sqlite",
  storage: `./db/database.${ENV}.sqlite`,
});

export { db };
