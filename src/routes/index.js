const express = require('express')
const routes = express.Router()

routes.use('/users', require('./users'))
routes.use('/boxes', require('./boxes'))
routes.use('/devices', require('./devices'))
routes.use('/services', require('./services'))
routes.use('/vehicles', require('./vehicles'))
routes.use('/timesheets', require('./timesheets'))
routes.use('/equipaments', require('./equipaments'))
routes.use('/installations', require('./installations'))
routes.use('/fiberleftovers', require('./fiberleftovers'))
routes.use('/ordersofservice', require('./ordersofservice'))

routes.use('/sendmail', require('./sendmail'))
routes.use('/report', require('./report'))

routes.use('/auth/:type', require('./auth'))

module.exports = routes