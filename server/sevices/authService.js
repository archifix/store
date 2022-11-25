const ApiErrors = require("../exceptions/ApiErrors")
const {users} = require("../models")



class AuthService {
  async registration({email, password}) {
    const condidate = await users.findOne({where: {email}})
    if (condidate) {
      throw ApiErrors.BadRequest(`Такой пользователь с email ${email} уже существует`)
    }
  }
  async auth() {

  }
  async logout() {

  }
}

module.exports = new AuthService()