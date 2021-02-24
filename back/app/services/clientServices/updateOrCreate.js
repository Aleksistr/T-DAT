'use strict';
const clientSchema = require('../../schema/ClientSchema')


const updateOrCreate = function (cliId, purchase) {
    return new Promise((resolve, reject) => {
        clientSchema.findOne({client_id: cliId}, function (err, client) {
            if (err) {
                console.log('Error');
            }
            if (typeof purchase!== 'undefined') {
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
            } else {
                resolve(true);
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
           if (err) {
               updateOrCreate(cliId,purchase).then();
           } else {
               resolve(client)
           }
       })
    });
}

module.exports = updateOrCreate;
