const express = require('express')
const routes = express.Router()
const report = require('../controllers/report')

routes.get('/', report.all)

module.exports = routes