'use strict';

const rowSchema = require('../../schema/RowSchema');

const getClientFamillyCount = function (clientId) {
    return new Promise((resolve, reject) => {

        getClientFammiliesList(clientId).then((list) => {
            let result = [];
            list.forEach((famille) => {
                result.push(getFamilleCount(famille, clientId).then());
            });
            let responses = Promise.all(result);
            resolve(responses);
        });
    });
}

const getClientFammiliesList = function (clientId) {
    return new Promise((resolve, reject) => {
       rowSchema.find({CLI_ID: clientId}).distinct('FAMILLE', function (err, families) {
           resolve(families);
       })
    });
}

const getFamilleCount = function (famille, clientId) {
    return new Promise((resolve, reject) => {
        rowSchema.countDocuments({CLI_ID: clientId, FAMILLE: famille}, function (err, count) {
            resolve({
                famille: famille,
                count: count
            });
        });
    })
}

module.exports = getClientFamillyCount;
