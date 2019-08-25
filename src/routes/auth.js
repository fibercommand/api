const express = require('express')
const routes = express.Router()
const auth = require('../controllers/auth')

routes.post('/login', auth.login)
routes.post('/logout', auth.logout)

module.exports = routes