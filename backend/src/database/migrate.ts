import "dotenv/config";
import { drizzle } from "drizzle-orm/better-sqlite3";
import { migrate } from "drizzle-orm/better-sqlite3/migrator";
import DatabaseConstructor from "better-sqlite3";

/** this can be used on production or in CI */
function main() {
  console.log("Running migrations");
  const sqlite = new DatabaseConstructor(
    `./db/database.${process.env.NODE_ENV}.sqlite`,
  );
  const db = drizzle(sqlite);

  // This will run migrations on the database, skipping the ones already applied
  migrate(db, { migrationsFolder: "./src/database/migrations" });

  console.log("Migrated successfully");
  sqlite.close();
  process.exit(0);
}

try {
  main();
} catch (e) {
  console.error("Migration failed");
  console.error(e);
  process.exit(1);
}
