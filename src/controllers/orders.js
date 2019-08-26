const Order = require('../models/Order')

module.exports = {

  find: async (req, res) => {
    const orders = await Order.find()
    return res.send(orders)
  },

  create: async (req, res) => {
    const order = await Order.create(req.body)
    return res.send(order)
  },

  update: async (req, res) => {
    const orderId = req.params.id
    const content = req.body
    const options = { new: true }
    const order = await Order.findByIdAndUpdate(orderId, content, options)
    return res.send(order)
  },

  remove: async (req, res) => {
    const orderId = req.params.id
    const order = await Order.findByIdAndRemove(orderId)
    return res.send(order)
  }

}