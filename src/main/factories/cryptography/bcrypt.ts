import { BcryptAdapter } from '@/infra/cryptography'

export const makeBcryptAdapt = (): BcryptAdapter => {
  const salt = 12
  return new BcryptAdapter(salt)
}
