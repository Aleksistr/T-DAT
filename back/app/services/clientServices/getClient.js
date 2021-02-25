'use strict';

const rowSchema = require('../../schema/RowSchema');

const getClient = function (id) {
    return new Promise((resolve, reject) => {
       rowSchema.find({CLI_ID: id})
           .exec(function (err, rows) {
            if (err) {
                console.log(err)
            } else {
                resolve(rows);
            }
       });
    });
}


module.exports = getClient;
