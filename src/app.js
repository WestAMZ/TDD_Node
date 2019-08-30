const express = require('express');
const bodyParser = require('body-parser');
const app = express();

//Añadiendo body-parser como middlewar
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.post('/users',(req,res)=>{
    res.status(200).send({});
});
module.exports = app;