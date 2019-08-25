const { Schema, model } = require('mongoose')

const boxTypes = {
  name: String
}

const schemaOptions = {
  timestamps: true
}

const boxSchema = new Schema(boxTypes, schemaOptions)

const Box = model('Box', boxSchema)

module.exports = Box