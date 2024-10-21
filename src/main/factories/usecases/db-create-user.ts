import { DbCreateUser } from '@/data/usecases'
import { makeBcryptAdapt } from '@/main/factories/cryptography/bcrypt'
import { makePgDrizzleUserRepository } from '@/main/factories/repositories'

export const makeDbCreateUser = (): DbCreateUser => {
  const userRepository = makePgDrizzleUserRepository()
  const bcryptAdapter = makeBcryptAdapt()
  return new DbCreateUser(userRepository, bcryptAdapter, userRepository)
}
