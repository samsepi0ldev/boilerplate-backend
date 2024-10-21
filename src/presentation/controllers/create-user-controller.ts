import { Controller } from '@/presentation/controllers'
import type { HttpResponse } from '@/presentation/protocols'
import type { CreateUser } from '@/domain/usecases/user'
import { badRequest, internalServerError, ok } from '@/presentation/helpers'
import { ParamInUserError, ServerError } from '@/presentation/errors'

type Request = {
  name: string
  email: string
  avatar?: string
  password: string
}

export class CreateUserController extends Controller {
  constructor(private readonly createUser: CreateUser) {
    super()
  }

  async perform(request: Request): Promise<HttpResponse> {
    try {
      const userResponse = await this.createUser.create(request)
      return ok(userResponse)
    } catch (error) {
      if (error instanceof ParamInUserError) {
        return badRequest(error.message)
      }
      return internalServerError(
        new ServerError(error instanceof Error ? error : undefined).message
      )
    }
  }
}
