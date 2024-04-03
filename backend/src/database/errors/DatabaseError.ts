export class DatabaseError extends Error {
  code = 500;

  constructor() {
    super();
    this.message = "Database Error";
    this.name = "DatabaseError";
  }
}
