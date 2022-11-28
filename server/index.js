require("dotenv").config()
const express = require("express")
const errorMiddleware = require("./middlewares/error-middleware")
const cookieParser = require("cookie-parser")
const cors = require("cors")

const app = express()

const api = require("./api")

const PORT = process.env.PORT

// const whitelist = ["https://sequelize.org"]

// const corsOptions = {
//   origin: function (origin, callback) {
//     if (whitelist.indexOf(origin) !== -1) {
//       callback(null, true)
//     }
//     callback(new Error('Not allowed by CORS'))
//   }
// }

app.use(express.json({limit: "10gb"}))
app.use(cors())
app.use(cookieParser(process.env.ACCESS_TOKEN_SECRET))

app.use("/api", api)

app.use(errorMiddleware)

const start = () => {
  app.listen(PORT, () => console.log(`Server started on ${PORT}`))
}

start()