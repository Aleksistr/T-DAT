'use strict';

const rowSchema = require('../../schema/RowSchema');

const getList = function () {
    return new Promise((resolve, reject) => {
       rowSchema.find().distinct('LIBELLE', function (err, res) {
           if(err) {
               console.log(err);
           }
          resolve(res);
       });
    });
}

module.exports = getList;
