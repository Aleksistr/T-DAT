'use strict'

const express = require('express');
const router = express.Router();
const purchaseController = require('../controllers/purchaseController');

router.get('/:id', purchaseController.get);

module.exports = router;
