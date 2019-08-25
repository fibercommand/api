const { Schema, model } = require('mongoose')

const equipamentTypes = {
  name: String
}

const schemaOptions = {
  timestamps: true
}

const equipamentSchema = new Schema(equipamentTypes, schemaOptions)

const Equipament = model('Equipament', equipamentSchema)

module.exports = Equipament