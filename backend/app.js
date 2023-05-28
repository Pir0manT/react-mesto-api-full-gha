const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const helmet = require('helmet')
const cookieParser = require('cookie-parser')
const { errors } = require('celebrate')
const routes = require('./routes')
const errorsHandler = require('./middlewares/handelError')

require('dotenv').config()

const { PORT = 3000, DB_PATH = 'mongodb://127.0.0.1:27017/mestodb' } =
  process.env

const app = express()

app.use(helmet())
app.use(bodyParser.json())
app.use(cookieParser())
app.use(routes)
app.use(errors())
app.use(errorsHandler)

mongoose.connect(DB_PATH)
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`)
})
