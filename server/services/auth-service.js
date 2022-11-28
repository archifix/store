const ApiErrors = require("../exceptions/api-errors")
const { users } = require("../models")
const bcrypt = require("bcrypt")
const UserDto = require("../dtos/user-dto")
const tokenService = require("./token-service")

class AuthService {
  async registration({ email, password }) {

    const candidateEmail = await users.findOne({ where: { email }})
    if ( candidateEmail ) {
      throw ApiErrors.BadRequest(`Такой пользователь с email ${ email } уже существует`)
    }

    const hashPassword = await bcrypt.hash( password, 3 )
    const user = await users.create({ email, password: hashPassword })

    const userDto = new UserDto( user )

    const {
      accessToken,
      refreshToken
    } = tokenService.generateTokens({ ...userDto })

    return {
      user: userDto,
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