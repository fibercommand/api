const express = require('express')
const routes = express.Router()
const equipaments = require('../controllers/equipaments')

routes.get('/', equipaments.find)
routes.post('/', equipaments.create)
routes.put('/:id', equipaments.update)
routes.delete('/:id', equipaments.remove)

module.exports = routes