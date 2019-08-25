const express = require('express')
const routes = express.Router()
const vehicles = require('../controllers/vehicles')

routes.get('/', vehicles.find)
routes.post('/', vehicles.create)
routes.put('/:id', vehicles.update)
routes.delete('/:id', vehicles.remove)

module.exports = routes