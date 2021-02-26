'use strict'

const clientService = require('../../services/clientServices');

const getClientFamillyCount = function (req, res, next) {
    clientService.getClientFamillyCount(req.params.id).then((response) => {
        res.json({
            data: response
        })
    })
}

module.exports = getClientFamillyCount;
