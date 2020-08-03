const { fetchViaCep } = require('./viacep')
const { fetchWideNet } = require('./widenet')
const { fetchPassagensPromo } = require('./passagenspromo')
const { validations } = require('../../utils/validations')

const fetchAll = async (cep, service = null, proxy) => {
  try {
    const validCep = await validations(cep)

    const services = {
      passagenspromo: fetchPassagensPromo(cep, proxy),
      viacep: fetchViaCep(cep, proxy),
      widenet: fetchWideNet(cep, proxy),
      default: await Promise.race([
        fetchViaCep(validCep, proxy),
        fetchWideNet(cep, proxy),
        fetchPassagensPromo(cep, proxy),
      ]),
    }
    return await (services[service] || services['default'])
  } catch (e) {
    return e
  }
}

module.exports = {
  fetchAll,
}
