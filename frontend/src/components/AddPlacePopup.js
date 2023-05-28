import { useEffect } from 'react'
import PopupWithForm from './PopupWithForm'
import { useInput } from '../hooks/input.hook'
import ErrorMessage from './ErrorMessage'

const AddPlacePopup = ({
  isOpen,
  isSaving,
  loadingText,
  onClose,
  onAddPlace,
}) => {
  // const nameRef = useRef()
  // const linkRef = useRef()

  const name = useInput('')
  const url = useInput('', { isUrl: true })

  useEffect(() => {
    // nameRef.current.value = ''
    // linkRef.current.value = ''
    name.setValue('')
    url.setValue('')
    name.clearErrorMessage()
    url.clearErrorMessage()
  }, [isOpen])

  const handleSubmit = (e) => {
    e.preventDefault()
    // onAddPlace({ name: nameRef.current.value, link: linkRef.current.value })
    onAddPlace({ name: name.value, link: url.value })
  }

  return (
    <PopupWithForm
      name="add-element"
      isOpen={isOpen}
      isSaving={isSaving}
      loadingText={loadingText}
      onClose={onClose}
      onSubmit={handleSubmit}
      title="Новое место"
      btnTitle="Создать"
      btnDisabled={!name.isValid.result || !url.isValid.result}
    >
      <input
        required
        className="popup__input"
        type="text"
        minLength="2"
        maxLength="30"
        placeholder="Название"
        id="element-name"
        name="name"
        // ref={nameRef}
        {...name}
      />
      <ErrorMessage message={name.isValid.errorMessage} />
      <input
        required
        className="popup__input"
        type="url"
        placeholder="Ссылка на картинку"
        id="element-link"
        name="link"
        {...url}
      />
      <ErrorMessage message={url.isValid.errorMessage} />
    </PopupWithForm>
  )
}

export default AddPlacePopup
