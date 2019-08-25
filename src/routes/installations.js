const express = require('express')
const routes = express.Router()
const installations = require('../controllers/installations')

routes.get('/', installations.find)
routes.post('/', installations.create)
routes.put('/:id', installations.update)
routes.delete('/:id', installations.remove)

module.exports = routes