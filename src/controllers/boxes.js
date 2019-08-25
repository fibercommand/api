const Box = require('../models/Box')

module.exports = {

  find: async (req, res) => {
    const boxes = await Box.find()
    return res.send(boxes)
  },

  create: async (req, res) => {
    const box = await Box.create(req.body)
    return res.send(box)
  },

  update: async (req, res) => {
    const boxId = req.params.id
    const content = req.body
    const options = { new: true }
    const box = await Box.findByIdAndUpdate(boxId, content, options)
    return res.send(box)
  },

  remove: async (req, res) => {
    const boxId = req.params.id
    const box = await Box.findByIdAndRemove(boxId)
    return res.send(box)
  }

}