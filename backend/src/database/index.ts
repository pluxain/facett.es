import { drizzle } from "drizzle-orm/better-sqlite3";
import DatabaseConstructor from "better-sqlite3";

const sqlite = new DatabaseConstructor(
  `./db/database.${process.env.NODE_ENV}.sqlite`,
);
const db = drizzle(sqlite);

export { db };
