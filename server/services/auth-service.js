const ApiErrors = require("../exceptions/api-errors")
const {users} = require("../models")
const bcrypt = require("bcrypt")
const UserDto = require("../dtos/user-dto")
const tokenService = require("./token-service")

class AuthService {
  async registration({email, password}) {
    const candidateEmail = await users.findOne({where: {email}})
    if (candidateEmail) {
      throw ApiErrors.BadRequest(`Такой пользователь с email ${email} уже существует`)
    }

    const hashPassword = await bcrypt.hash(password, 3)
    const user = await user.create({email, password: hashPassword})

    const userDto = UserDto(user)

    const {
      accessToken,
      refreshToken
    } = tokenService.generateTokens({...userDto})

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