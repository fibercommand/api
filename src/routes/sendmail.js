const express = require('express')
const routes = express.Router()
const sendmail = require('../controllers/sendmail')

routes.post('/', sendmail.send)

module.exports = routes