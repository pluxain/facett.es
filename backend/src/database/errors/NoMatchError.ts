export class NoMatchError extends Error {
  code = 400;

  constructor() {
    super();
    this.message = "No match";
    this.name = "NoMatchError";
  }
}
