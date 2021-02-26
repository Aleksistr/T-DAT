'use strict';

const rowSchema = require('../../schema/RowSchema');

const getList = function () {
    return new Promise((resolve, reject) => {
        rowSchema.find().distinct('CLI_ID', function (err, res) {
            resolve(res);
        })
    })
}

module.exports = getList;
