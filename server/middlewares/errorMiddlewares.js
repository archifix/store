const ApiErrors = require("../exceptions/apiError")

module.exports = async (err, req, res) => {
  try {
    if (err instanceof ApiErrors) {
      return res.status(err.status).json({message: err.message})
    }
    return res.status(500)
  } catch (e) {

  }
}