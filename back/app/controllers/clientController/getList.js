'use strict';

const clientService = require('../../services/clientServices');

const getClientList = function (req, res, next) {
    clientService.getList().then((response) => {
        res.json({
            list: response
        });
    });
}

module.exports = getClientList;
