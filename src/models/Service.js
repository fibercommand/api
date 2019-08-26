const { Schema, model } = require('mongoose')

const User = {
  id: String,
  name: String
}

const types = {
  client: String,
	type: String,
  technician: User,
	author: User,
	date: Date,
	observation: String
}

const options = {
  timestamps: true
}

const serviceSchema = new Schema(types, options)

const Service = model('Service', serviceSchema)

module.exports = Service