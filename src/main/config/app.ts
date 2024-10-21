import fastifyCors from '@fastify/cors'
import fastify from 'fastify'

import { setupUserRoute } from '@/main/routes/user'

const app = fastify()

app.register(fastifyCors, {
  origin: '*',
})
app.register(setupUserRoute)

export { app }
