const express = require('express')
const routes = express.Router()

routes.use('/users', require('./users'))
routes.use('/boxes', require('./users'))
routes.use('/devices', require('./users'))
routes.use('/services', require('./users'))
routes.use('/vehicles', require('./users'))
routes.use('/timesheet', require('./users'))
routes.use('/equipaments', require('./users'))
routes.use('/installations', require('./users'))
routes.use('/fiberleftovers', require('./users'))
routes.use('/ordersofservice', require('./users'))

routes.use('/sendMail', require('./users'))
routes.use('/report', require('./users'))

routes.use('/auth/:type', require('./users'))

module.exports = routes