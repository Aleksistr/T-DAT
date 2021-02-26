'use strict'

const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

router.get('/product/:id', productController.get);
router.get('/list', productController.getList);

module.exports = router;
