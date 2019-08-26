const { Schema, model } = require('mongoose')

const User = {
  id: String,
  name: String
}

const types = {
  client: String,
  city: String,
  author: User,
  technician: User,
  status: String,
  observation: String
}

const options = {
  timestamps: true
}

const orderSchema = new Schema(types, options)

const Order = model('Order', orderSchema)

module.exports = Order