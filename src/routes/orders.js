const express = require('express')
const routes = express.Router()
const orders = require('../controllers/orders')

routes.get('/', orders.find)
routes.post('/', orders.create)
routes.put('/:id', orders.update)
routes.delete('/:id', orders.remove)

module.exports = routes