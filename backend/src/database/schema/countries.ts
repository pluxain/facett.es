import { sqliteTable, text } from "drizzle-orm/sqlite-core";
import { withTimestamps } from "./utils";

export const countries = sqliteTable(
  "countries",
  withTimestamps({
    id: text("id", { length: 2 }).primaryKey(),
    name: text("name"),
  }),
);
