const throwError = (message, statusCode) => {
  class CustomError extends Error {
    constructor(message, statusCode) {
      super(message);
      this.statusCode = statusCode;
      this.message = message;
      this.name = "CustomError";
    }
  }
  throw new CustomError(message, statusCode);
};

export default throwError;
