const fetch = require('isomorphic-unfetch')

const fetchViaCep = (cep, proxyURL = '') => {
  const url = `${proxyURL}https://viacep.com.br/ws/${cep}/json/`
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
      bairro: data.bairro,
      cidade: data.localidade,
      logradouro: data.logradouro,
      tipo_logradouro: data.logradouro.split(' ')[0],
      uf: data.uf,
      servico: 'ViaCep',
      data
    }))
    .catch((e) => e)
}

module.exports = {
  fetchViaCep,
}
