'use strict';

const rowSchema = require('../../schema/RowSchema');

const getUniverseList = function () {
    return new Promise((resolve, reject) => {
       rowSchema.find().distinct('UNIVERS', function (err, list) {
           resolve(list);
       })
    });
}

module.exports = getUniverseList;
