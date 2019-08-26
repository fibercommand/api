const { Schema, model } = require('mongoose')

const User = {
  id: String,
  name: String
}

const Document = {
  photo: String,
  type: String
}

const Dbi = {
  photo: String,
  value: Number
}

const types = {
  client: String,
  technician: User,
  dbi: Dbi,
  documents: [Document]
}

const options = {
  timestamps: true
}

const installationSchema = new Schema(types, options)

const Installation = model('Installation', installationSchema)

module.exports = Installation