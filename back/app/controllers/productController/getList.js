'use strict';

const productService = require('../../services/productServices');

const getList = function (req, res, next) {
    productService.getList().then((response) => {
        res.json({
            data: response
        })
    })
}

module.exports = getList;

