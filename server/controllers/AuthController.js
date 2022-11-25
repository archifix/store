const authService = require("../sevices/authService")

class AuthController {
  
  async registration(req, res, next) {
    try {
      const {email, password} = req.body

      const userData = await authService.registration({ email, password })
    } catch (e) {
      next(e)
    }
  }
}

module.exports = new AuthController()