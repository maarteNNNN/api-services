const validateInput = (cep) => {
  const cepTypeOf = typeof cep

  if (cepTypeOf === 'number' || cepTypeOf === 'string') {
    return cep
  }

  throw new Error('CEP is an invalid combination.')
}

const removeSpecialCharacters = (cep) => {
  return cep.toString().replace(/\D+/g, '')
}

const validateInputLength = (cep) => {
  if (cep.length <= 8) {
    return cep
  }

  throw new Error('CEP is an invalid size.')
}

const validations = (cep) => {
  return Promise.resolve(cep)
    .then(validateInput)
    .then(removeSpecialCharacters)
    .then(validateInputLength)
    .catch((e) => e)
}

module.exports = {
  validations,
}
