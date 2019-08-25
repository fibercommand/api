const Equipament = require('../models/Equipament')

module.exports = {

  find: async (req, res) => {
    const equipaments = await Equipament.find()
    return res.send(equipaments)
  },

  create: async (req, res) => {
    const equipament = await Equipament.create(req.body)
    return res.send(equipament)
  },

  update: async (req, res) => {
    const equipamentId = req.params.id
    const content = req.body
    const options = { new: true }
    const equipament = await Equipament.findByIdAndUpdate(equipamentId, content, options)
    return res.send(equipament)
  },

  remove: async (req, res) => {
    const equipamentId = req.params.id
    const equipament = await Equipament.findByIdAndRemove(equipamentId)
    return res.send(equipament)
  }

}