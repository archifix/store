const jwt = require("jsonwebtoken")
const {userTokens} = require("../models")

class TokenService {
  async generateTokens(payload) {
    const accessToken = jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, {
      expiresIn: "1d"
    })
    const refreshToken = jwt.sign(payload, process.env.REFRESH_TOKEN_SECRET, {
      expiresIn: "30d"
    })

    return {
      accessToken,
      refreshToken
    }
  }

  async saveToken(refreshToken, userId) {
    const refreshTokenDB = await userTokens.findOne({where: {token: refreshToken, userId}})
    if (refreshTokenDB) {
      refreshTokenDB.token = refreshToken
      await refreshToken.save()
    }
    await userTokens.create({token: refreshToken, userId})
  }

  async findToken(refreshToken) {
    const refreshTokenDB = await userTokens.findOne({where: {token: refreshToken}})
    return refreshTokenDB
    
  }

  async deleteRefreshToken(userId) {
    const refreshTokenDB = await userTokens.findOne({where: {userId}})
    await refreshTokenDB.destroy()    
  }
}

module.exports = new TokenService()