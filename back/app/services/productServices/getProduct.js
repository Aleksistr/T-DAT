'use strict';

const rowSchema = require('../../schema/RowSchema');

const getProduct = function (id) {
    return new Promise((resolve, reject) => {
        rowSchema.findOne({LIBELLE: id})
            .exec(function (err, rows) {
                if (err) {
                    console.log(err)
                } else {
                    resolve(rows);
                }
            });
    });
}


module.exports = getProduct;
