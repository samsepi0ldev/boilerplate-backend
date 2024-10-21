import { PgDrizzleUserRepository } from '@/infra/repositories'

export const makePgDrizzleUserRepository = (): PgDrizzleUserRepository => {
  return new PgDrizzleUserRepository()
}
