const express = require('express')
const routes = express.Router()
const services = require('../controllers/services')

routes.get('/', services.find)
routes.post('/', services.create)
routes.put('/:id', services.update)
routes.delete('/:id', services.remove)

module.exports = routes