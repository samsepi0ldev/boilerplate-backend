import type {
  CreateUserRepository,
  FindUserByEmailRepository,
} from '@/data/protocols'
import type { CreateUser } from '@/domain/usecases/user'
import { ParamInUserError } from '@/presentation/errors'

export class DbCreateUser implements CreateUser {
  constructor(
    private readonly findUserByEmailRepository: FindUserByEmailRepository,
    private readonly createUserRepository: CreateUserRepository
  ) {}

  async create({
    name,
    email,
    password,
    avatar,
  }: CreateUser.Input): Promise<CreateUser.Output> {
    const user = await this.findUserByEmailRepository.findByEmail(email)
    if (user) {
      throw new ParamInUserError('email')
    }
    return await this.createUserRepository.create({
      name,
      email,
      password,
      avatar,
    })
  }
}
