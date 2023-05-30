const router = require('express').Router()
const rateLimit = require('express-rate-limit')
const auth = require('../middlewares/auth')
const usersRouter = require('./users')
const cardsRouter = require('./cards')
const { NOT_FOUND } = require('../utils/errors')
const {
  validationLogin,
  validationCreateUser,
} = require('../middlewares/validations')
const { login, createUser, logout } = require('../controllers/users')

const { NODE_ENV = 'development', MAX_AUTH_ATTEMPTS = 5 } = process.env

const authLimiter = rateLimit({
  windowMs: 1 * 60 * 1000, // 1 minute
  max: NODE_ENV === 'production' ? MAX_AUTH_ATTEMPTS : 100,
  message:
    'Too many register or login attempts from this IP, please try again after an hour',
  standardHeaders: true,
  legacyHeaders: false,
})

router.post('/signin', [validationLogin, authLimiter], login)
router.post('/signup', [validationCreateUser, authLimiter], createUser)
router.post('/logout', logout)
router.get('/crash-test', () => {
  setTimeout(() => {
    throw new Error('Сервер сейчас упадёт')
  }, 0)
})

router.use(auth)
router.use('/users', usersRouter)
router.use('/cards', cardsRouter)

router.use((req, res) => {
  res.status(NOT_FOUND).send({ message: 'Service not found' })
})

module.exports = router
