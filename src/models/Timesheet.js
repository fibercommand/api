const { Schema, model } = require('mongoose')

const timesheetTypes = {
  name: String
}

const schemaOptions = {
  timestamps: true
}

const timesheetSchema = new Schema(timesheetTypes, schemaOptions)

const Timesheet = model('Timesheet', timesheetSchema)

module.exports = Timesheet