require('dotenv').config()
const express = require('express')
const errorMiddlewares = require('./middlewares/errorMiddlewares')
const cookieParser = require("cookie-parser")


const PORT = process.env.PORT

app.use(cookieParser())

const app = express()

app.use(errorMiddlewares)

const start = async () => {
  app.listen(PORT, () => console.log(`Server OK on: ${PORT}`))
}

start()