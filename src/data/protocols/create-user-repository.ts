import type { CreateUser } from '@/domain/usecases/user'

export interface CreateUserRepository {
  create: (
    input: CreateUserRepository.Input
  ) => Promise<CreateUserRepository.Output>
}

export namespace CreateUserRepository {
  export type Input = CreateUser.Input
  export type Output = CreateUser.Output
}
