const User = require('../models/User')

module.exports = {

  find: async (req, res) => {
    const timesheets = await User.find()
    return res.send(timesheets)
  },

  create: async (req, res) => {
    const timesheet = await User.create(req.body)
    return res.send(timesheet)
  },

  update: async (req, res) => {
    const timesheetId = req.params.id
    const content = req.body
    const options = { new: true }
    const timesheet = await User.findByIdAndUpdate(timesheetId, content, options)
    return res.send(timesheet)
  },

  remove: async (req, res) => {
    const timesheetId = req.params.id
    const timesheet = await User.findByIdAndRemove(timesheetId)
    return res.send(timesheet)
  }

}