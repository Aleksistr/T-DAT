'use strict';

const rowSchema = require('../../schema/RowSchema');

const getPurchase = function (id) {
    return new Promise((resolve, reject) => {
        rowSchema.find({TICKET_ID: id})
            .exec(function (err, rows) {
                if (err) {
                    console.log(err)
                } else {
                    resolve(rows);
                }
            });
    });
}


module.exports = getPurchase;
