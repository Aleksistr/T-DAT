'use strict';
const clientSchema = require('../../schema/ClientSchema')


const updateOrCreate = function (cliId, purchase) {
    return new Promise((resolve, reject) => {
        clientSchema.findOne({client_id: cliId}, function (err, client) {
            if (err) {
                console.log('Error');
            }
            if (client === null) {
                createClient(cliId, purchase).then((cli) => {
                    resolve(cli);
                })
            } else {
                // test purchase id
                if (! client.purchases.includes(purchase._id)) {
                    client.purchases.push(purchase);
                    client.save(function (err, cli) {
                        resolve(cli);
                    })
                } else {
                    resolve(client)
                }
            }
        })
    });
}

const createClient = function (cliId, purchase) {
    return new Promise((resolve, reject) => {
       clientSchema.create({
           client_id: cliId,
           purchases: [purchase]
       }, function (err, client) {
           resolve(client)
       })
    });
}

module.exports = updateOrCreate;
