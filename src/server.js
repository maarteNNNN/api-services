const fastify = require('fastify')
const { fetchAll } = require('./services/cep/index')
const { PROXY } = require('./utils/constants')

const app = fastify({ logger: false })

app.post('/', async (request, reply) => {
  let body = request.body
  if (typeof request.body === 'string') body = JSON.parse(request.body)
  const res = await fetchAll(body.cep, body.service, PROXY)
  console.log(res)
  return res
})
;(async () => {
  try {
    await app.listen(3000)
    app.log.info(`Server is listening on ${app.server.address().port}`)
  } catch (e) {
    app.log.error(e)
    process.exit(1)
  }
})()
