const { Logging } = require('@google-cloud/logging')
const { fetchAll } = require('./services/cep/index')
const { PROXY } = require('./utils/constants')

const logging = new Logging()

exports.cep = async (req, res) => {
  res.set('Access-Control-Allow-Origin', process.env.CORS)
  res.set('Access-Control-Allow-Headers', '*')

  let body = req.body
  if (typeof req.body === 'string') {
    body = JSON.parse(req.body)
  }

  if (req.method !== 'POST') {
    res.status(500).send({ error: 'Only POST is allowed!' })
    return
  }
  const data = await fetchAll(body.cep, body.service, PROXY)
  res.status(200).send(data)
}
