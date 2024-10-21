import type { User } from '@/domain/entities'

export interface FindUserByEmailRepository {
  findByEmail: (email: string) => Promise<User>
}
