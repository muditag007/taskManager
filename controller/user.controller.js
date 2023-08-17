// const { create } = require('../services/user.services')
const UserService = require('../services/user.services')

exports.register = async (req, res, next) => {
  try {
    const { email, password } = req.body

    const successRes = await UserService.registerUser(email, password)

    res.json({ status: true, success: 'User Registered Successfully' })
  } catch (e) {
    throw e
  }
}

exports.login = async (req, res, next) => {
  try {
    const { email, password } = req.body

    const user = await UserService.checkUser(email)

    if (!user) {
      res.json({ status: true, success: 'User does not exist' })
    } else {
      if (user.password == password) {
        res.json({ status: true, success: 'Login Successfull' })
      } else {
        res.json({ status: true, success: 'Incorrect Password' })
      }
    }
  } catch (e) {
    throw e
  }
}
