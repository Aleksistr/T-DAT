'use strict'

const express = require('express');
const router = express.Router();

const familleController = require('../controllers/familleController');

router.get('/getList', familleController.getFamillyList);
router.get('/getCount', familleController.getFamillyCount);

module.exports = router;
