import { app } from '@/main/config'

app.listen({ port: 3333, host: '0.0.0.0' }, (_, pathname) => {
  console.log(`🚀 Server running at ${pathname}`)
})
