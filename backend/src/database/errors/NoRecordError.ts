export class NoRecordError extends Error {
  code = 404;

  constructor() {
    super();
    this.message = "No record";
    this.name = "NoRecordError";
  }
}
