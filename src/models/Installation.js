const { Schema, model } = require('mongoose')

const installationTypes = {
  name: String
}

const schemaOptions = {
  timestamps: true
}

const installationSchema = new Schema(installationTypes, schemaOptions)

const Installation = model('Installation', installationSchema)

module.exports = Installation