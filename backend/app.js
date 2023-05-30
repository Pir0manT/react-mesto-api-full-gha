const express = require('express')
const mongoose = require('mongoose')
const helmet = require('helmet')
const cookieParser = require('cookie-parser')
const { errors } = require('celebrate')
const { config } = require('dotenv')
const cors = require('cors')
const responseTime = require('response-time')
const routes = require('./routes')
const errorsHandler = require('./middlewares/handelError')
const { requestLogger, errorLogger } = require('./middlewares/logger')

if (process.env.NODE_ENV === 'production') {
  config()
}

const {
  PORT = 3000,
  DB_PATH = 'mongodb://127.0.0.1:27017/mestodb',
  BASE_URL = 'http://localhost',
} = process.env

const app = express()

app.use(helmet())
app.use(express.json())
app.use(cookieParser())
app.use(
  cors({
    origin: BASE_URL,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    preflightContinue: false,
    optionsSuccessStatus: 204,
    credentials: true,
  })
)

app.use(responseTime(requestLogger))

app.use(routes)
app.use(errorLogger)
app.use(errors())
app.use(errorsHandler)

mongoose.connect(DB_PATH)

const db = mongoose.connection

db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', () => {
  console.log('Connected to MongoDB')
})

// Создавать какие либо конфиги в корне приложения
// из которых потом чего то экспортировать/импортировать
// считаю ненужным и бесполезным захламлением кода!
// Все необходимые переменные окружения корректно устанавливаются при сборке/запуске
// docker-контейнеров, они же описаны в README для тех, кто захочет все собрать ручками
// см. файл start.sh в корне проекта

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`)
})
