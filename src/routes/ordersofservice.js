const express = require('express')
const routes = express.Router()
const ordersofservice = require('../controllers/ordersofservice')

routes.get('/', ordersofservice.find)
routes.post('/', ordersofservice.create)
routes.put('/:id', ordersofservice.update)
routes.delete('/:id', ordersofservice.remove)

module.exports = routes