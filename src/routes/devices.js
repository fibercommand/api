const express = require('express')
const routes = express.Router()
const devices = require('../controllers/devices')

routes.get('/', devices.find)
routes.post('/', devices.create)
routes.put('/:id', devices.update)
routes.delete('/:id', devices.remove)

module.exports = routes