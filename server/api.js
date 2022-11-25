const { Router } = require("express")
const router = Router()
const auth = require("./api/AuthApi")

router.use("/auth", auth)

module.exports = router