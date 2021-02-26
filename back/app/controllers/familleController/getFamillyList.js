'use strict';

const famillyService = require('../../services/famileServices')

const getFamillyList = function (req, res, next) {
    famillyService.getFamillyList().then((list) => {
            res.json({
                famillies: list
            })
        }
    )

}

module.exports = getFamillyList;
