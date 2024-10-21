import type { User } from '@/domain/entities'

export interface CreateUser {
  create: (input: CreateUser.Input) => Promise<CreateUser.Output>
}

export namespace CreateUser {
  export type Input = Omit<User, 'id' | 'createdAt'>
  export type Output = Omit<User, 'password'>
}
