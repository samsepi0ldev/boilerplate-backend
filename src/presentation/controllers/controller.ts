import type { HttpResponse } from '@/presentation/protocols'
import { ValidationComposite, type Validator } from '@/presentation/validations'
import { badRequest, internalServerError } from '@/presentation/helpers'
import { ServerError } from '@/presentation/errors'

export abstract class Controller {
  abstract perform(request: any): Promise<HttpResponse>

  buildValidation(request: any): Validator[] {
    return []
  }

  async handle(request: any) {
    const error = this.validate(request)
    if (error) return badRequest(error.message)
    try {
      return this.perform(request)
    } catch (error) {
      return internalServerError(
        new ServerError(error instanceof Error ? error : undefined).message
      )
    }
  }

  private validate(request: any): Error | undefined {
    const validators = this.buildValidation(request)
    return new ValidationComposite(validators).validate()
  }
}
