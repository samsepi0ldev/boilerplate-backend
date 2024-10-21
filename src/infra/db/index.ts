import * as schema from '@/infra/schema'
import { env } from '@/main/config/env'
import { drizzle } from 'drizzle-orm/postgres-js'
import postgres from 'postgres'

export const client = postgres(env.DATABASE_URL)
export const db = drizzle(client, { schema })
