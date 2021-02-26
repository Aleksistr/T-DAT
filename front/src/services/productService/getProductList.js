'use strict'

const axios = require('axios')

const getProductList = function () {
  return new Promise((resolve, reject) => {
    axios({
      method: 'get',
      url: 'http://localhost:3000/products/list'
    }).then((response) => {
      resolve(response.data.data)
    })
  })
}

module.exports = getProductList
