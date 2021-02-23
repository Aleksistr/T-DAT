'use strict';
const purchaseSchema = require('../../schema/PurchaseSchema')


const updateOrCreate = function (ticketId, mois_vente, product) {
    return new Promise((resolve, reject) => {
        purchaseSchema.findOne({ticket_id: ticketId}, function (err, purchase) {
            if (err) {
                console.log('Error');
            }
            if (purchase === null) {
                createPurchase(ticketId, mois_vente, product).then((pur) => {
                    resolve(pur);
                })
            } else {
                purchase.products.push(product);
                purchase.total_price = purchase.total_price + product.price;
                purchase.save(function (err, purch) {
                    resolve(purch);
                })
            }
        })
    });
}

const createPurchase = function (ticket_id, mois_vente, product) {
    return new Promise((resolve, reject) => {
       purchaseSchema.create({
           ticket_id: ticket_id,
           mois_vente: mois_vente,
           total_price: product.price,
           products: [product]
       }, function (err, purchase) {
           resolve(purchase)
       })
    });
}

module.exports = updateOrCreate;
