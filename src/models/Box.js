const { Schema, model } = require('mongoose')

const User = {
  id: String,
  name: String
}

const Location = {
  latitude: String,
	longitude: String
}

const boxTypes = {
	name: String,
	description: String,
	type: String,
	ports: Number,
	portsInUse: Number,
	approved: Boolean,
	photos: [String],
	author: User,
	location: Location
}

const schemaOptions = {
  timestamps: true
}

const boxSchema = new Schema(boxTypes, schemaOptions)

const Box = model('Box', boxSchema)

module.exports = Box