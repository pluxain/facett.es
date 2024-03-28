import "dotenv/config";
import type { Config } from "drizzle-kit";

export default {
  driver: "better-sqlite",
  schema: "./src/database/schema/*",
  out: "./src/database/migrations",
  dbCredentials: {
    url: `./db/database.${process.env.NODE_ENV}.sqlite`,
  },
  strict: true,
  verbose: true,
} satisfies Config;
