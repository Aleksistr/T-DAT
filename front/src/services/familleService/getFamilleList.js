'use strict'

const axios = require('axios')

const getFamilleList = function () {
  return new Promise((resolve, reject) => {
    axios({
      method: 'get',
      url: 'http://localhost:3000/famillies/getList'
    }).then((response) => {
      resolve(response.data.famillies)
    })
  })
}

module.exports = getFamilleList
