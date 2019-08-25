const { Schema, model } = require('mongoose')

const vehicleTypes = {
  name: String
}

const schemaOptions = {
  timestamps: true
}

const vehicleSchema = new Schema(vehicleTypes, schemaOptions)

const Vehicle = model('Vehicle', vehicleSchema)

module.exports = Vehicle