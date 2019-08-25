const express = require('express')
const routes = express.Router()
const timesheets = require('../controllers/timesheets')

routes.get('/', timesheets.find)
routes.post('/', timesheets.create)
routes.put('/:id', timesheets.update)
routes.delete('/:id', timesheets.remove)

module.exports = routes