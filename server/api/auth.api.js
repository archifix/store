const {Router} = require("express")
const router = Router()
const controller = require("../controllers/auth.controller")

router.post("/registration", controller.registration)
router.post("/", controller.auth)

module.exports = router