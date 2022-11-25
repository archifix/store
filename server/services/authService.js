const ApiErrors = require("../exceptions/ApiErrors")
const { users } = require("../models/users")
const bcrypt = require('bcrypt')
const UserDto = require('../dto/UserDto')
const TokenService = require("./TokenService")

class AuthService {
  async registration({ email, password }) {
    const candidateEmail = await users.findOne({where: {email}})
    if (candidateEmail) {
      throw ApiErrors.BadRequest(`Такой пользователь с email ${email} уже существует`)
    }

    const hashPassword = await bcrypt.hash(password, 3)

    const user =  await users.create({ email, password: hashPassword })
    const userDto = new UserDto(user)

    const {accessToken, refreshToken} = TokenService.generateTokens({ ...userDto })

    return {
      user: UserDto,
      accessToken,
      refreshToken
    }
  }
  async auth() {

  }
  async logout() {

  }
}

module.exports = new AuthService()