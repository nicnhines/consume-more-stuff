const express = require('express');
const app = express();
const userRoute = require('./users');
const itemRoute = require('./items');

module.exports = app;


app.use('/users', userRoute);
app.use('/items', itemRoute);