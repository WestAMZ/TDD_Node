const express = require('express')
const bodyParser = require('body-parser')
const userRoutes = require('./routers/userRoutes')

const app = express()

const version = '/v1'

//  Añadiendo body-parser como middlewar
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

//  Routing
app.use(version, userRoutes)

module.exports = app
