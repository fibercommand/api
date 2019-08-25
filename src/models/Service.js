const { Schema, model } = require('mongoose')

const serviceTypes = {
  name: String
}

const schemaOptions = {
  timestamps: true
}

const serviceSchema = new Schema(serviceTypes, schemaOptions)

const Service = model('Service', serviceSchema)

module.exports = Service