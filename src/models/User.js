const { Schema, model } = require('mongoose')

// [ 'all', 'users', 'boxes', 'devices', 'services', 'vehicles', 'timesheet', 'equipaments',
// 'installations', 'fiberleftovers', 'ordersofservice', 'sendMail', 'report', 'desktop', 'mobile' ]

const Timesheet = {
  date: Date,
  start: Date,
  break: Date,
  back: Date,
  end: Date
}

const types = {
  name: String,
  username: String,
  passworld: String,
  phone: String,
  permissions: [String],
  suspended: Boolean,
  timesheets: [Timesheet]
}

const options = {
  timestamps: true
}

const userSchema = new Schema(types, options)

const User = model('User', userSchema)

module.exports = User