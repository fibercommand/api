const { Schema, model } = require('mongoose')

const fiberleftoverTypes = {
  name: String
}

const schemaOptions = {
  timestamps: true
}

const fiberleftoverSchema = new Schema(fiberleftoverTypes, schemaOptions)

const Fiberleftover = model('Fiberleftover', fiberleftoverSchema)

module.exports = Fiberleftover