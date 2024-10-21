import { makeDbCreateUser } from '@/main/factories/usecases'
import { CreateUserController } from '@/presentation/controllers'

export const makeCreateUserController = (): CreateUserController => {
  return new CreateUserController(makeDbCreateUser())
}
