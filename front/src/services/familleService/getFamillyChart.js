'use strict'

const axios = require('axios')

const getFamillyChart = function () {
  return new Promise((resolve, reject) => {
    axios({
      method: 'get',
      url: 'http://localhost:3000/famillies/getCount'
    }).then((response) => {
      resolve(response.data.data)
    })
  })
}

module.exports = getFamillyChart
