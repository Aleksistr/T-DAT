'use strict'

const express = require('express');
const router = express.Router();
const universeController = require('../controllers/universeController');

router.get('/getList', universeController.getList);

module.exports = router;
