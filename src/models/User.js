const { Schema, model } = require('mongoose')

const userTypes = {
  name: String,
  permissions: [
    String // [ 'all', 'users', 'boxes', 'devices', 'services', 'vehicles', 'timesheet', 'equipaments', 'installations', 'fiberleftovers', 'ordersofservice', 'sendMail', 'report', 'desktop', 'mobile' ]
  ]
}

const schemaOptions = {
  timestamps: true
}

const userSchema = new Schema(userTypes, schemaOptions)

const User = model('User', userSchema)

module.exports = User