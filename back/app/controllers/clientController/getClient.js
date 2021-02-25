'use strict'


const clientService = require('../../services/clientServices');

const getClient = function (req, res, next) {
    clientService.getClient(req.params.id).then((client) => {
        res.json({
            status: 'success',
            client: client
        });
    })
}

module.exports = getClient;
