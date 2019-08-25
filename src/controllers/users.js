const User = require('../models/User')

module.exports = {

  find: async (req, res) => {
    const users = await User.find()
    return res.send(users)
  },

  create: async (req, res) => {
    const user = await User.create(req.body)
    return res.send(user)
  },

  update: async (req, res) => {
    const userId = req.params.id
    const content = req.body
    const options = { new: true }
    const user = await User.findByIdAndUpdate(userId, content, options)
    return res.send(user)
  },

  remove: async (req, res) => {
    const userId = req.params.id
    const user = await User.findByIdAndRemove(userId)
    return res.send(user)
  }

}