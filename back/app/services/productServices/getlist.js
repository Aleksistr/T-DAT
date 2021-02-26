'use strict';

const rowSchema = require('../../schema/RowSchema');

const getList = function () {
    return new Promise((resolve, reject) => {
       rowSchema.find().distinct('LIBELLE', function (err, res) {
           if(err) {
               console.log(err);
           }
           let result = [];
           res.forEach((product) => {
               result.push(getProductFamilly(product).then())
           });
           let responses = Promise.all(result);
          resolve(responses);
       });
    });
}

const getProductFamilly = function (product) {
    return new Promise((resolve, reject) => {
        rowSchema.findOne({'LIBELLE': product}, function (err, res) {
            resolve({
                name: product,
                famille: res.FAMILLE
            });
        });
    });
}

module.exports = getList;
