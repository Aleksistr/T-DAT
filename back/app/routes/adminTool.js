'use strict'

const express = require('express');
const router = express.Router();

const adminToolController = require('../controllers/adminToolControllers');

router.get('/populate', adminToolController.populate)

module.exports = router;
