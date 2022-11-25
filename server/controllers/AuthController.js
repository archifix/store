const AuthService = require("../services/authService")

class AuthController {
  
  async registration(req, res, next) {
    try {
      const {email, password} = req.body

      const userData = await AuthService.registration({ email, password })
      res.cookie('refreshToken', userData.refreshToken, { maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true })

      return res.status(201).json(userData)
    } catch (e) {
      next(e)
    }
  }
}

module.exports = new AuthController()