const express = require('express')
const routes = express.Router()
const boxes = require('../controllers/boxes')

routes.get('/', boxes.find)
routes.post('/', boxes.create)
routes.put('/:id', boxes.update)
routes.delete('/:id', boxes.remove)

module.exports = routes