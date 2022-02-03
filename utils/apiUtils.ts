export enum HttpStatusCode {
  BAD_REQUEST = 400,
  NOT_FOUND = 404,
  INTERNAL_SERVER = 500,
  UNAUTHORIZED = 401,
  FORBIDDEN = 403,
  CONFLICT = 409,
  METHOD_NOT_ALLOWED = 405,
}

export class HTTPError extends Error {
  public readonly message: string;
  public readonly httpCode: HttpStatusCode;

  constructor(httpCode: HttpStatusCode, message = "") {
    super(message);
    this.message = message;
    this.httpCode = httpCode;
    Object.setPrototypeOf(this, HTTPError.prototype);
  }
}

export type IErrorResponse = {
  statusCode: number;
  message: string;
  method?: string;
};

export const mailTemplate = (name?: string, email?: string, message?: string) =>
  ``;
