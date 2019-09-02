const { Schema, model } = require('mongoose')

const User = {
  id: String,
  name: String
}

const types = {
  type: String,
  technician: String,
  date: Date,
  qtd: Number,
  observation: String,
	author: User
}

const options = {
  timestamps: true
}

const fiberleftoverSchema = new Schema(types, options)

const Fiberleftover = model('Fiberleftover', fiberleftoverSchema)

module.exports = Fiberleftover