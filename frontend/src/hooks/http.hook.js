import { useCallback, useState } from 'react'

export const useHttp = () => {
  const [error, setError] = useState(null)

  const request = useCallback(
    async ({
      url,
      method = 'POST',
      body = null,
      headers = {
        'Content-Type': 'application/json',
      },
    }) => {
      try {
        const response = await fetch(url, { method, body, headers })
        if (!response.ok) {
          throw new Error(`Could not fetch ${url}, status: ${response.status}`)
        }
        return await response.json()
      } catch (e) {
        setError(e.message)
        throw e
      }
    },
    []
  )

  const clearError = useCallback(() => setError(null), [])

  return { request, error, clearError }
}
