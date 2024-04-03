import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";
import { createId } from "@paralleldrive/cuid2";
import { withTimestamps } from "./utils";

export const users = sqliteTable(
  "users_login_information", // use a less common table name to make a harder target to guess in case of SQL injection
  withTimestamps({
    id: text("id")
      .primaryKey()
      .$defaultFn(() => createId()),
    email: text("email").unique("users_email_unique").notNull(),
    emailConfirmationToken: text("email_confirmation_token"), // null when confirmed
    firstname: text("firstname").notNull(),
    lastLoginAt: integer("last_login_at", { mode: "timestamp" }),
    lastname: text("lastname").notNull(),
    passwordHash: text("password_hash").notNull(), // TODO: use pbkdf2 for hashing
    passwordSalt: text("password_salt").notNull(),
  }),
);
