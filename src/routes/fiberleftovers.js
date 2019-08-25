const express = require('express')
const routes = express.Router()
const fiberleftovers = require('../controllers/fiberleftovers')

routes.get('/', fiberleftovers.find)
routes.post('/', fiberleftovers.create)
routes.put('/:id', fiberleftovers.update)
routes.delete('/:id', fiberleftovers.remove)

module.exports = routes