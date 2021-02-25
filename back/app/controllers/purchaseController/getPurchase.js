'use strict'


const purchaseService = require('../../services/purchaseServices');

const getPurchase = function (req, res, next) {
    purchaseService.getPurchase(req.params.id).then((client) => {
        res.json({
            status: 'success',
            client: client
        });
    })
}

module.exports = getPurchase;
