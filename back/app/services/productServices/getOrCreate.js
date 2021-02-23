'use strict';
const productSchema = require('../../schema/ProductSchema')


const getOrCreate = function (productLibelle, productPrice, famillies, universes) {
    return new Promise((resolve, reject) => {
        productSchema.findOne({libelle: productLibelle}, function (err, product) {
            if (err) {
                console.log('Error');
            }
            if (product === null) {
                createProduct(productLibelle, productPrice, famillies, universes).then((prod) => {
                    resolve(prod);
                })
            } else {
                resolve(product)
            }
        })
    });
}

const createProduct = function (libelle, price, famillies, universes) {
    return new Promise((resolve, reject) => {
       productSchema.create({
           libelle: libelle,
           price: price,
           families: famillies,
           universes: universes
       }, function (err, product) {
           resolve(product)
       })
    });
}

module.exports = getOrCreate;
