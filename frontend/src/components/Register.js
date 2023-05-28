import { useInput } from '../hooks/input.hook'
import ErrorMessage from './ErrorMessage'
import { Link } from 'react-router-dom'

const Register = ({ onRegister }) => {
  const email = useInput('', { isEmail: true })
  const password = useInput('')

  function handleSubmit(evt) {
    evt.preventDefault()
    onRegister(email.value, password.value)
  }

  return (
    <section className="login">
      <h2 className="login__title">Регистрация</h2>
      <form className="login__form" onSubmit={handleSubmit}>
        <input
          className="login__input"
          type="email"
          placeholder="Email"
          required
          {...email}
        />
        <ErrorMessage message={email.isValid.errorMessage} />
        <input
          className="login__input"
          type="password"
          placeholder="Пароль"
          autoComplete="on"
          minLength="5"
          required
          {...password}
        />
        <ErrorMessage message={password.isValid.errorMessage} />
        <button
          className={`login__btn ${
            !email.isValid.result || !password.isValid.result
              ? 'popup__save_disabled'
              : ''
          }`}
          type="submit"
          disabled={!email.isValid.result || !password.isValid.result}
        >
          Зарегистрироваться
        </button>
      </form>
      <p className="login__text">
        Уже зарегистрированы?{' '}
        <Link to="/sign-in" className="login__link link-opacity">
          Войти
        </Link>
      </p>
    </section>
  )
}

export default Register
