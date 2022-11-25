const {users} = require("../models")



class AuthService {
  async registration({email, password}) {
    const condidate = await users.findOne({where: {email}})
    if (condidate) {
      return
    }
  }
  async auth() {

  }
  async logout() {

  }
}

module.exports = new AuthService()