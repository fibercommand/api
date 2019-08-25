const Service = require('../models/Service')

module.exports = {

  find: async (req, res) => {
    const services = await Service.find()
    return res.send(services)
  },

  create: async (req, res) => {
    const service = await Service.create(req.body)
    return res.send(service)
  },

  update: async (req, res) => {
    const serviceId = req.params.id
    const content = req.body
    const options = { new: true }
    const service = await Service.findByIdAndUpdate(serviceId, content, options)
    return res.send(service)
  },

  remove: async (req, res) => {
    const serviceId = req.params.id
    const service = await Service.findByIdAndRemove(serviceId)
    return res.send(service)
  }

}