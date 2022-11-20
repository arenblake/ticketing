import { CustomError } from "./custom-error";

export class BadRequestError extends CustomError {
  statusCode = 400;
  reason = "Error connecting to database";
  constructor(public message: string) {
    super(message);

    // Because we are extending a build in class with TS
    Object.setPrototypeOf(this, BadRequestError.prototype);
  }

  serializeErrors() {
    return [{ message: this.message }];
  }
}
