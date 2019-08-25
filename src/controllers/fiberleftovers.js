const Fiberleftover = require('../models/Fiberleftover')

module.exports = {

  find: async (req, res) => {
    const fiberleftovers = await Fiberleftover.find()
    return res.send(fiberleftovers)
  },

  create: async (req, res) => {
    const fiberleftover = await Fiberleftover.create(req.body)
    return res.send(fiberleftover)
  },

  update: async (req, res) => {
    const fiberleftoverId = req.params.id
    const content = req.body
    const options = { new: true }
    const fiberleftover = await Fiberleftover.findByIdAndUpdate(fiberleftoverId, content, options)
    return res.send(fiberleftover)
  },

  remove: async (req, res) => {
    const fiberleftoverId = req.params.id
    const fiberleftover = await Fiberleftover.findByIdAndRemove(fiberleftoverId)
    return res.send(fiberleftover)
  }

}