import { sql } from "drizzle-orm";
import { SQLiteColumnBuilderBase, integer } from "drizzle-orm/sqlite-core";

/**
 * Decorator to add timestamps fields in a table
 *
 * @param table the table schema
 * @returns a schema decorated with `createdAt` and `updatedAt`
 */
export const withTimestamps = <
  S extends Record<string, SQLiteColumnBuilderBase>,
>(
  table: S,
) => ({
  ...table,
  createdAt: integer("created_at", { mode: "timestamp" })
    .notNull()
    .default(sql`(unixepoch())`),
  updatedAt: integer("updated_at", { mode: "timestamp" })
    .notNull()
    .default(sql`(unixepoch())`),
});
