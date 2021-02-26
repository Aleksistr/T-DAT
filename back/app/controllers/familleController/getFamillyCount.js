'use strict';

const famillyService = require('../../services/famileServices');

const getFamillyCount = function (req, res, next) {
    famillyService.getFamillyCount().then((array) => {
        res.json({
            data: array
        });
    })
}

module.exports = getFamillyCount;
