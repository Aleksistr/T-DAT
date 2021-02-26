'use strict'

const axios = require('axios')
const getClientList = function () {
  return new Promise((resolve, reject) => {
    axios({
      method: 'get',
      url: 'http://localhost:3000/clients/list'
    }).then((response) => {
      resolve(response.data.list)
    })
  })
}

module.exports = getClientList
