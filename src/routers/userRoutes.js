const express = require('express')

const api = express.Router()

api.post('/users', (req, res) => {
  res.status(201).send({})
})

module.exports = api
