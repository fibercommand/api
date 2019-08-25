const Device = require('../models/Device')

module.exports = {

  find: async (req, res) => {
    const devices = await Device.find()
    return res.send(devices)
  },

  create: async (req, res) => {
    const device = await Device.create(req.body)
    return res.send(device)
  },

  update: async (req, res) => {
    const deviceId = req.params.id
    const content = req.body
    const options = { new: true }
    const device = await Device.findByIdAndUpdate(deviceId, content, options)
    return res.send(device)
  },

  remove: async (req, res) => {
    const deviceId = req.params.id
    const device = await Device.findByIdAndRemove(deviceId)
    return res.send(device)
  }

}