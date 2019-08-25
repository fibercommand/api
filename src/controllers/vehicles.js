const Vehicle = require('../models/Vehicle')

module.exports = {

  find: async (req, res) => {
    const vehicles = await Vehicle.find()
    return res.send(vehicles)
  },

  create: async (req, res) => {
    const vehicle = await Vehicle.create(req.body)
    return res.send(vehicle)
  },

  update: async (req, res) => {
    const vehicleId = req.params.id
    const content = req.body
    const options = { new: true }
    const vehicle = await Vehicle.findByIdAndUpdate(vehicleId, content, options)
    return res.send(vehicle)
  },

  remove: async (req, res) => {
    const vehicleId = req.params.id
    const vehicle = await Vehicle.findByIdAndRemove(vehicleId)
    return res.send(vehicle)
  }

}