'use strict'

const universeService = require('../../services/universServices');

const getUniverseList = function (req, res, next) {
    universeService.getList().then((list) => {
        res.json({
            message: 'success',
            list: list
        })
    })
}

module.exports = getUniverseList;
