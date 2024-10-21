import bcrypt from 'bcrypt'

import type { Hasher } from '@/data/protocols'

export class BcryptAdapter implements Hasher {
  constructor(private readonly salt: number = 12) {}

  async hash(plaintext: string) {
    const digest = await bcrypt.hash(plaintext, this.salt)
    return digest
  }
}
