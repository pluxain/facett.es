export class DuplicateError extends Error {
  code = 409;

  constructor() {
    super();
    this.message = "Duplicate";
    this.name = "DuplicateError";
  }
}
