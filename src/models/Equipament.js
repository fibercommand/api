const { Schema, model } = require('mongoose')

const User = {
  id: String,
  name: String
}

const Equip = {
  id: String,
  name: String
}

const types = {
	type: String,
	technician: User,
	date: Date,
	equipaments: [Equip],
	author: User,
	observation: String,
	photo: String
}

const options = {
  timestamps: true
}

const equipamentSchema = new Schema(types, options)

const Equipament = model('Equipament', equipamentSchema)

module.exports = Equipament