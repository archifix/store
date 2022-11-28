const ApiErrors = require("../exceptions/api-errors")

module.exports = async (err, req, res, next) => {
    if (err instanceof ApiErrors) {
      return res.status(err.status).json({message: err.message})
    }
    return res.status(500).json({message: "Не предвиденная ошибка"})
}