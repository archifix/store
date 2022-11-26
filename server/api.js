const {Router} = require("express")
const router = Router()
const auth = require("./api/auth.api")

router.use("/auth", auth)

module.exports = router