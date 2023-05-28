import { useHttp } from './http.hook'

export const useAuth = () => {
  const { request, error, clearError } = useHttp()
  const _apiBase =
    process.env.REACT_APP_API_BASE_URL || 'https://auth.nomoreparties.co'

  const registerUser = async (email, password) => {
    return request({
      url: `${_apiBase}/signup`,
      body: JSON.stringify({ email, password }),
    })
  }

  const loginUser = async (email, password) => {
    return request({
      url: `${_apiBase}/signin`,
      body: JSON.stringify({ email, password }),
    })
  }

  const getToken = async (jwt) => {
    return request({
      url: `${_apiBase}/users/me`,
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${jwt}`,
      },
    })
  }
  return { loginUser, registerUser, getToken, error, clearError }
}
