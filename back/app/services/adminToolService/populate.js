'use strict';

const fs = require('fs');
const csv = require('csv-parser');

const famileService = require('../famileServices')
const universService = require('../universServices')
const productService = require('../productServices')
const purchaseService = require('../purchaseServices')
const clientService = require('../clientServices')


const populate = function () {
    return new Promise((resolve, reject) => {
        fs.createReadStream('KaDo.csv')
            .pipe(csv())
            .on('data', (row) => {
                createRow(row).then();
            })
            .on('end', () => {
                resolve('done')
            });
    });
}


const createRow = function (row) {
    return new Promise((resolve, reject) => {
        let familly = null;
        let universes = [];

        manageRowFamilly(row).then((famille) => {
            familly = famille;
            manageRowUniverse(row).then((universeList) => {
                universes = universeList;
                manageRowProduct(row, familly, universes).then((product) => {
                    manageRowPurchase(row, product).then((purchase) => {
                        manageRowClient(row, purchase).then(() => {
                            resolve(true);
                        })
                    });
                })
            });
        })
    });
}

const manageRowFamilly = function (row) {
    return new Promise((resolve, reject) => {
        famileService.getOrCreate(row.FAMILLE).then((famille) => {
            resolve(famille);
        })
    })
}

const manageRowUniverse = function (row) {
    return new Promise((resolve, reject) => {
        let response = [];
        let universeList = row.UNIVERS.split(' ');
        universeList.forEach((universe) => {
            response.push(universService.getOrCreate(universe))
        });
        let responses = Promise.all(response);
        resolve(responses);
    })
}

const manageRowProduct = function (row, families, universes) {
    return new Promise((resolve, reject) => {
        productService.getOrCreate(row.LIBELLE, row.PRIX_NET, families, universes).then((product) => {
            resolve(product);
        })
    })
}

const manageRowPurchase = function (row, product) {
    return new Promise((resolve, reject) => {
        purchaseService.updateOrCreate(row.TICKET_ID, row.MOIS_VENTE, product).then((purchase) => {
            resolve(purchase);
        })
    })
}

const manageRowClient = function (row, purchase) {
    return new Promise((resolve, reject) => {
        clientService.updateOrCreate(row.CLI_ID, purchase).then((client) => {
            resolve(client);
        })
    })
}

module.exports = populate;
