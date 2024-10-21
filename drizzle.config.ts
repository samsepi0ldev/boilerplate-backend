import { env } from '@/main/config/env'
import { defineConfig } from 'drizzle-kit'

export default defineConfig({
  schema: './src/infra/schema/index.ts',
  out: './.migrations',
  dbCredentials: {
    url: env.DATABASE_URL,
  },
  dialect: 'postgresql',
})
