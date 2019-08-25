const Installation = require('../models/Installation')

module.exports = {

  find: async (req, res) => {
    const installations = await Installation.find()
    return res.send(installations)
  },

  create: async (req, res) => {
    const installation = await Installation.create(req.body)
    return res.send(installation)
  },

  update: async (req, res) => {
    const installationId = req.params.id
    const content = req.body
    const options = { new: true }
    const installation = await Installation.findByIdAndUpdate(installationId, content, options)
    return res.send(installation)
  },

  remove: async (req, res) => {
    const installationId = req.params.id
    const installation = await Installation.findByIdAndRemove(installationId)
    return res.send(installation)
  }

}