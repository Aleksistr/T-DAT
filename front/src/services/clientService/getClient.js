'use strict'

const axios = require('axios')

const getClient = function (clienId) {
  return new Promise((resolve, reject) => {
    axios({
      method: 'get',
      url: 'http://localhost:3000/clients/client/' + clienId
    }).then((response) => {
      resolve(response.data.client)
    })
  })
}

module.exports = getClient
