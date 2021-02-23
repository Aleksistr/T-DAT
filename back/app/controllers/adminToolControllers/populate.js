'use strict'

const adminToolService = require('../../services/adminToolService')

const populate = function (req, res, next) {
    adminToolService.populate().then(() => {
        res.json({
            status: 'success',
            message: 'populated'
        })
    })
}

module.exports = populate;
