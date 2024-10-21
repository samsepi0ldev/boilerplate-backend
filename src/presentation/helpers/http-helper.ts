import { type HttpResponse, HttpStatusCode } from '../protocols'

function createResponse<T>(
  data: T,
  statusCode: HttpStatusCode
): HttpResponse<T> {
  return { data, statusCode }
}

export const ok = <T>(data: T): HttpResponse<T> => {
  return createResponse(data, HttpStatusCode.OK)
}

export const created = <T>(data: T): HttpResponse<T> => {
  return createResponse(data, HttpStatusCode.Created)
}

export const noContent = (): HttpResponse<null> => {
  return createResponse(null, HttpStatusCode.NoContent)
}

export const badRequest = <T>(
  message: string
): HttpResponse<{ message: string }> => {
  return createResponse({ message }, HttpStatusCode.BadRequest)
}

export const unauthorized = <T>(
  message: string
): HttpResponse<{ message: string }> => {
  return createResponse({ message }, HttpStatusCode.Unauthorized)
}

export const forbidden = <T>(
  message: string
): HttpResponse<{ message: string }> => {
  return createResponse({ message }, HttpStatusCode.Forbidden)
}

export const notFound = <T>(
  message: string
): HttpResponse<{ message: string }> => {
  return createResponse({ message }, HttpStatusCode.NotFound)
}

export const unprocessableEntity = <T>(
  message: string
): HttpResponse<{ message: string }> => {
  return createResponse({ message }, HttpStatusCode.UnprocessableEntity)
}

export const internalServerError = <T>(
  message: string
): HttpResponse<{ message: string }> => {
  return createResponse({ message }, HttpStatusCode.InternalServerError)
}

export const badGateway = <T>(
  message: string
): HttpResponse<{ message: string }> => {
  return createResponse({ message }, HttpStatusCode.BadGateway)
}

export const serviceUnavailable = <T>(
  message: string
): HttpResponse<{ message: string }> => {
  return createResponse({ message }, HttpStatusCode.ServiceUnavailable)
}
