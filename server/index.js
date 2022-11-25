require('dotenv').config()
const express = require('express')


const PORT = process.env.PORT

const app = express()

const start = async () => {
  app.listen(PORT, () => console.log(`Server OK on: ${PORT}`))
}

start()