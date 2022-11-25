const { Router } = require("express")
const router = Router()
const controller = require("../controllers/AuthController")

router.post("/registration", controller.registration)

module.exports = router