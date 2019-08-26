const { Schema, model } = require('mongoose')

const User = {
  id: String,
  name: String
}

const Supply = {
  km: Number,
  litters: Number,
  price: Number,
  author: User,
  date: Date,
  photo: String,
  observation: String
}

const Repair = {
  price: Number,
  author: User,
  date: Date,
  photo: String,
  observation: String
}

const Oil = {
  km: Number,
  litters: Number,
  price: Number,
  author: User,
  date: Date,
  photo: String,
  observation: String
}

const Tire = {
  km: Number,
  position: Number, //front, rear or all
  price: Number,
  author: User,
  date: Date,
  photo: String,
  observation: String
}

const Wash = {
  price: Number,
  author: User,
  date: Date,
  photo: String,
  observation: String
}

const types = {
  model: String,
  plate: String,
  description: String,
  brand: String,
  supplies: [Supply],
  repairs: [Repair],
  tires: [Tire],
  oils: [Oil],
  washes: [Wash]
}

const options = {
  timestamps: true
}

const vehicleSchema = new Schema(types, options)

const Vehicle = model('Vehicle', vehicleSchema)

module.exports = Vehicle