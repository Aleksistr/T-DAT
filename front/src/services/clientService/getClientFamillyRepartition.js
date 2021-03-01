'use strict'

const axios = require('axios')

const getClientFamillyRepartition = function (clientId) {
  return new Promise((resolve, reject) => {
    axios({
      method: 'get',
      url: 'http://localhost:3000/clients/client/' + clientId + '/famillies'
    }).then((response) => {
      resolve(response.data.data)
    })
  })
}

module.exports = getClientFamillyRepartition
