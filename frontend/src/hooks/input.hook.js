import { useCallback, useState } from 'react'

const useValidation = () => {
  const validate = useCallback((input, validations) => {
    if (!input.validity.valid)
      return { result: false, errorMessage: input.validationMessage }

    for (const validation in validations) {
      switch (validation) {
        case 'isEmail':
          const reEmail =
            /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
          if (!reEmail.test(input.value.toLowerCase()))
            return { result: false, errorMessage: 'Пожалуйста, введите Email' }
          break
        case 'isUrl':
          const reUrl =
            /^(https?|ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i
          if (!reUrl.test(input.value.toLowerCase()))
            return { result: false, errorMessage: 'Пожалуйста, введите URL' }
          break
      }
    }
    return { result: true, errorMessage: '' }
  }, [])
  return {
    validate,
  }
}
export const useInput = (initialValue, validations = {}) => {
  const [value, setValue] = useState(initialValue)
  const { validate } = useValidation()
  const [isValid, setValid] = useState({ result: false, errorMessage: '' })

  const onChange = (e) => {
    setValue(e.target.value)
    setValid(() => validate(e.target, validations))
  }
  const onBlur = (e) => {
    setValid(() => validate(e.target, validations))
  }

  const clearErrorMessage = useCallback(
    (res = false) => setValid({ result: res, errorMessage: '' }),
    []
  )

  return {
    value,
    setValue,
    onChange,
    onBlur,
    isValid,
    clearErrorMessage,
  }
}
