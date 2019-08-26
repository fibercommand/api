const { Schema, model } = require('mongoose')

const deviceTypes = {
  name: String,
  host: String,
	status: Boolean,
	group: String
}

const schemaOptions = {
  timestamps: true
}

const deviceSchema = new Schema(deviceTypes, schemaOptions)

const Device = model('Device', deviceSchema)

module.exports = Device