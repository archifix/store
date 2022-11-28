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

  async auth({email, password}) {

   const user = await users.findOne({ where: { email }})
   if ( !user ) {
    throw ApiErrors.BadRequest(`Не верный пароль или почта`)
  }

  const comparePasswords = await bcrypt.compare(password, user.password)
  if (!comparePasswords) {
    throw ApiErrors.BadRequest(`Не верный пароль или почта`)
  }

  await tokenService.saveToken(refreshToken, user.id)


 const userDto = new UserDto( user )

   const {
     accessToken,
     refreshToken
   } = tokenService.generateTokens({ ...userDto })

   await tokenService.saveToken(refreshToken, user.id)

    return {
    user: userDto,
     accessToken,
     refreshToken
   }
  }

  async logout() {

  }
}

module.exports = new AuthService()