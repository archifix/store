class ApiErrors extends Error {
   
  status

  constructor(status, message) {
    super(message)
    this.status = status
  }

  static BadRequest(message = "Не предвиденная ошибка") {
    return new ApiErrors(500, message)
  }
}

module.exports = ApiErrors