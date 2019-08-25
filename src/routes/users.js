const express = require('express')
const routes = express.Router()
const users = require('../controllers/users')

routes.get('/', users.find)
routes.post('/', users.create)
routes.put('/:id', users.update)
routes.delete('/:id', users.remove)

module.exports = routes