'use strict';
const familleSchema = require('../../schema/FamilleSchema')


const getOrCreate = function (familyName) {
    return new Promise((resolve, reject) => {
        familleSchema.findOne({name: familyName}, function (err, famille) {
            if (err) {
                console.log('Error');
            }
            if (famille === null) {
                createFamille(familyName).then((familly) => {
                    resolve(familly);
                })
            } else {
                resolve(famille)
            }
        })
    });
}

const createFamille = function (familyName) {
    return new Promise((resolve, reject) => {
       familleSchema.create({
           name: familyName
       }, function (err, familly) {
           if (err) {
               getOrCreate(familyName).then();
           } else {
               resolve(familly)
           }
       })
    });
}

module.exports = getOrCreate;
