'use strict'

const express = require('express');
const router = express.Router();
const clientController = require('../controllers/clientController');

router.get('/client/:id', clientController.get);
router.get('/client/:id/famillies', clientController.getClientFamillyCount);
router.get('/list', clientController.getList);

module.exports = router;
