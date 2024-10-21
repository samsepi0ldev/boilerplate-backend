import type {
  CreateUserRepository,
  FindUserByEmailRepository,
} from '@/data/protocols'
import type { User } from '@/domain/entities'
import { db } from '@/infra/db'
import { users } from '@/infra/schema'
import { eq } from 'drizzle-orm'

export class PgDrizzleUserRepository
  implements CreateUserRepository, FindUserByEmailRepository
{
  async create({
    name,
    email,
    password,
    avatar,
  }: CreateUserRepository.Input): Promise<CreateUserRepository.Output> {
    const [user] = await db
      .insert(users)
      .values({ name, email, password, avatar })
      .returning()

    return {
      id: user.id,
      name: user.name,
      email: user.email,
      avatar: user.avatar,
      createdAt: user.createdAt,
    }
  }
  async findByEmail(email: string): Promise<User> {
    const [user] = await db.select().from(users).where(eq(users.email, email))
    return user
  }
}
