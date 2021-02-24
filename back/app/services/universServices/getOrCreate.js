'use strict';
const univerSchema = require('../../schema/UniversSchema')


const getOrCreate = function (universeName) {
    return new Promise((resolve, reject) => {
        univerSchema.findOne({name: universeName}, function (err, universe) {
            if (err) {
                console.log('Error');
            }
            if (universe === null) {
                createUnivers(universeName).then((univ) => {
                    resolve(univ);
                })
            } else {
                resolve(universe)
            }
        })
    });
}

const createUnivers = function (universeName) {
    return new Promise((resolve, reject) => {
        univerSchema.create({
           name: universeName
       }, function (err, univers) {
            if (err) {
                getOrCreate(universeName).then();
            } else {
                resolve(univers)
            }
       })
    });
}

module.exports = getOrCreate;
