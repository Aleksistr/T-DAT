'use strict';

const rowSchema = require('../../schema/RowSchema');
const getFamilleList = require('./getFamilleList');

const getFamillyCount = function () {
    return new Promise((resolve, reject) => {
       getFamilleList().then((list) => {
           let result = [];
           list.forEach((famille) => {
               result.push(getFamilleCount(famille).then());
           });
           let responses = Promise.all(result);
           resolve(responses);
       })
    });
}

const getFamilleCount = function (famille) {
    return new Promise((resolve, reject) => {
        rowSchema.countDocuments({FAMILLE: famille}, function (err, count) {
           resolve({
               famille: famille,
               count: count
           });
        });
    })
}

module.exports = getFamillyCount;
