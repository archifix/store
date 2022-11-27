const ApiErrors = require("../exceptions/api-errors")

module.exports = async (err, req, res) => {
  try {
    if (err instanceof ApiErrors) {
      return req.status(err.status).json({message: err.message})
    }
    return req.status(500).json({message: "Не предвиденная ошибка"})
  } catch (e) {
    return req.status(500).json({message: "Не предвиденная ошибка"})
  }
}