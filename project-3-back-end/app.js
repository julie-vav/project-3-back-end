var express = require('express');
var logger = require('morgan');
var cors = require('cors');
var requestsRouter = require('./routes/requests');
var app = express();

require('dotenv').config();
require('./config/database');

app.use(logger('dev'));
app.use(express.json());
app.use(cors());

app.use('/api/requests', requestsRouter);

module.exports = app;