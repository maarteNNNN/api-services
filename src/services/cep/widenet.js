const fetch = require('isomorphic-unfetch')

const fetchWideNet = (cep, proxyURL = '') => {
  const url = `${proxyURL}https://cep.widenet.host/busca-cep/api/cep/${cep}.json`
  const options = {
    method: 'GET',
    mode: 'cors',
    headers: {
      'content-type': 'application/json;charset=utf-8',
    },
  }

  return fetch(url, options)
    .then((res) => res.json())
    .then((data) => ({
      bairro: data.district,
      cidade: data.city,
      logradouro: data.address,
      tipo_logradouro: data.address.split(' ')[0],
      uf: data.state,
      servico: 'WideNet',
      data
    }))
    .catch((e) => e)
}

module.exports = {
  fetchWideNet,
}
