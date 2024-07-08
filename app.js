const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const router = require('./router');

const app = express();

app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', router);

module.exports = app;
