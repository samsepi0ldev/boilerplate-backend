import type { Controller } from '@/presentation/controllers'
import type { RouteHandler } from 'fastify'

type Setup = (controller: Controller) => RouteHandler

export const fastifyRouteAdapter: Setup = controller => async (req, res) => {
  const body = {
    ...(req.body as any),
    ...(req.params as any),
    ...(req.query as any),
  }

  const { statusCode, data } = await controller.handle(body)
  const response = [200, 201, 204].includes(statusCode)
    ? data
    : { message: data.message }

  return res.status(statusCode).send(response)
}
