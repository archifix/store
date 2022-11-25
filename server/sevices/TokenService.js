const jwt = require('jsonwebtoken')

class TokenService {
  
  generateTokens(payload) {
    const accessToken = jwt.sign(payload, process.env.SECRET_KEY)
  }

  findToken() {

  }

  deleteRefreshToken() {

  }
}

module.exports = new TokenService()