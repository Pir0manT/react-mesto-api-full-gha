import { useInput } from '../hooks/input.hook'
import ErrorMessage from './ErrorMessage'

const Login = ({ onLogin }) => {
  const email = useInput('', { isEmail: true })
  const password = useInput('')
  function handleSubmit(evt) {
    evt.preventDefault()
    onLogin(email.value, password.value)
  }

  return (
    <section className="login">
      <h2 className="login__title">Вход</h2>
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
          Войти
        </button>
      </form>
    </section>
  )
}

export default Login
