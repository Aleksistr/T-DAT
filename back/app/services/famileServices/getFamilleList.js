'use strict';

const rowSchema = require('../../schema/RowSchema');

const getFamilleList = function () {
    return new Promise((resolve, reject) => {
        rowSchema.find().distinct('FAMILLE', function (err, famillies) {
            resolve(famillies);
        });
    });
}

module.exports = getFamilleList;
