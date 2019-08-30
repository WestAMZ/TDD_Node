const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('.routers/userRoutes');

const app = express();

//  Añadiendo body-parser como middlewar
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//  Routing
app.use('/v1', userRoutes);

module.exports = app;