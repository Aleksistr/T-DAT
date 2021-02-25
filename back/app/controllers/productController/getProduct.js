'use strict'


const productService = require('../../services/productServices');

const getProduct = function (req, res, next) {
    productService.getProduct(req.query.libelle).then((client) => {
        res.json({
            status: 'success',
            product: client
        });
    })
}

module.exports = getProduct;
