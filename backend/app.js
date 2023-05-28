const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const helmet = require('helmet')
const cookieParser = require('cookie-parser')
const { errors } = require('celebrate')
const { dotenv } = require('dotenv')
const routes = require('./routes')
const errorsHandler = require('./middlewares/handelError')

if (process.env.NODE_ENV === 'production') {
  dotenv.config()
}

const { PORT = 3000, DB_PATH = 'mongodb://mongo:27017/mestodb' } = process.env

const app = express()

app.use(helmet())
app.use(bodyParser.json())
app.use(cookieParser())
app.use(routes)
app.use(errors())
app.use(errorsHandler)

mongoose.connect(DB_PATH)

const db = mongoose.connection

db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', function () {
  console.log('Connected to MongoDB')
})

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`)
})
