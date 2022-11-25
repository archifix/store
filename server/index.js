require('dotenv').config()
const express = require('express')
const errorMiddlewares = require('./middlewares/errorMiddlewares')


const PORT = process.env.PORT

const app = express()

app.use(errorMiddlewares)

const start = async () => {
  app.listen(PORT, () => console.log(`Server OK on: ${PORT}`))
}

start()