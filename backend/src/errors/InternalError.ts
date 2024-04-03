export class InternalError extends Error {
  code = 500;

  constructor() {
    super();
    this.message = "Internal Error";
    this.name = "InternalError";
  }
}
