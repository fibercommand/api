const { Schema, model } = require('mongoose')

const orderofserviceTypes = {
  name: String
}

const schemaOptions = {
  timestamps: true
}

const orderofserviceSchema = new Schema(orderofserviceTypes, schemaOptions)

const Orderofservice = model('Orderofservice', orderofserviceSchema)

module.exports = Orderofservice