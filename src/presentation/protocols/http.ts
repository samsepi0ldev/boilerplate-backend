export enum HttpStatusCode {
  OK = 200,
  Created = 201,
  NoContent = 204,

  BadRequest = 400,
  Unauthorized = 401,
  Forbidden = 403,
  NotFound = 404,
  UnprocessableEntity = 422,

  InternalServerError = 500,
  BadGateway = 502,
  ServiceUnavailable = 503,
}

export interface HttpResponse<T = any> {
  data: T
  statusCode: HttpStatusCode
}
