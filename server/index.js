require('dotenv').config()
const express = require('express')
const errorMiddlewares = require('./middlewares/errorMiddlewares')
const cookieParser = require("cookie-parser")
const app = express()
const api = require("./api")
const cors = require("cors")

const PORT = process.env.PORT

// const whitelist = ["https://sequelize.org"]
// const corsOptions = {
//   origin: function (origin, callback) {
//     if (whitelist.indexOf(origin) !== -1) {
//       callback(null, true)
//     } else {
//       callback(new Error('Not allowed by CORS'))
//     }
//   }
// }

app.use(express.json({ limit: "10gb" }))
app.use(cors())
app.use(cookieParser())

app.use("/api", api)

app.use(errorMiddlewares)

const start = async () => {
  app.listen(PORT, () => console.log(`Server OK on: ${PORT}`))
}

start()