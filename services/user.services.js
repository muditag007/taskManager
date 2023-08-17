const { create } = require('../model/user.model')
const UserModel = require('../model/user.model')

class UserService {
  static async registerUser (email, password) {
    try {
      const createUser = new UserModel({ email, password })
      return await createUser.save()
    } catch (e) {
      console.log(e)
      throw e
    }
  }

  static async checkUser (email) {
    try {
      console.log(UserModel({ email }))
      return await UserModel.findOne({ email })
    } catch (e) {
      throw e
    }
  }
}

module.exports = UserService
