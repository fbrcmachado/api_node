'use strict'

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const router = express.Router();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//Carrega as Rotas
const index = require('./routes/index-route');
const product = require('./routes/product-route');



app.use('/', index);
app.use('/product-route', product);
app.use('/product-route', product);
app.use('/product-route', product);

module.exports = app;




