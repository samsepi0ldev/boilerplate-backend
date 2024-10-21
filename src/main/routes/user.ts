import type { FastifyInstance } from 'fastify'

import { fastifyRouteAdapter as adapt } from '@/main/adapters/fastify-route-adapter'
import { makeCreateUserController } from '@/main/factories/controllers'

export function setupUserRoute(app: FastifyInstance) {
  app.post('/users/register', adapt(makeCreateUserController()))
}
