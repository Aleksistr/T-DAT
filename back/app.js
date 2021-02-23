const express = require('express');
const path = require('path');
const cors = require('cors');
const app = express();
const adminToolRouter = require('./app/routes/adminTool');

const db = require ('./app/helpers/db/db');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin-tool', adminToolRouter);

module.exports = app;
