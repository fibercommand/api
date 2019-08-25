const Orderofservice = require('../models/Orderofservice')

module.exports = {

  find: async (req, res) => {
    const ordersofservice = await Orderofservice.find()
    return res.send(ordersofservice)
  },

  create: async (req, res) => {
    const orderofservice = await Orderofservice.create(req.body)
    return res.send(orderofservice)
  },

  update: async (req, res) => {
    const orderofserviceId = req.params.id
    const content = req.body
    const options = { new: true }
    const orderofservice = await Orderofservice.findByIdAndUpdate(orderofserviceId, content, options)
    return res.send(orderofservice)
  },

  remove: async (req, res) => {
    const orderofserviceId = req.params.id
    const orderofservice = await Orderofservice.findByIdAndRemove(orderofserviceId)
    return res.send(orderofservice)
  }

}