import { useContext, useEffect } from 'react'
import { CurrentUserContext } from '../contexts/CurrentUserContext'
import PopupWithForm from './PopupWithForm'
import { useInput } from '../hooks/input.hook'
import ErrorMessage from './ErrorMessage'

const EditProfilePopup = ({
  isOpen,
  isSaving,
  loadingText,
  onClose,
  onUpdateUser,
}) => {
  const currentUser = useContext(CurrentUserContext)
  // const [name, setName] = useState(currentUser.name)
  // const [description, setDescription] = useState(currentUser.about)
  const userName = useInput(currentUser.name)
  const userJob = useInput(currentUser.about)

  useEffect(() => {
    userName.setValue(currentUser.name)
    userJob.setValue(currentUser.about)
    userName.clearErrorMessage(true)
    userJob.clearErrorMessage(true)
  }, [currentUser, isOpen])

  const handleSubmit = (e) => {
    e.preventDefault()
    onUpdateUser({ name: userName.value, about: userJob.value })
  }

  return (
    <PopupWithForm
      name="edit-profile"
      isOpen={isOpen}
      isSaving={isSaving}
      loadingText={loadingText}
      onClose={onClose}
      onSubmit={handleSubmit}
      title="Редактировать профиль"
      btnTitle="Сохранить"
      btnDisabled={!userName.isValid.result || !userJob.isValid.result}
    >
      <input
        required
        className="popup__input"
        type="text"
        placeholder="Ваше имя"
        id="name-input"
        minLength="2"
        maxLength="40"
        {...userName}
      />
      <ErrorMessage message={userName.isValid.errorMessage} />
      <input
        required
        className="popup__input"
        type="text"
        placeholder="Немного о себе"
        id="description-input"
        minLength="2"
        maxLength="200"
        name="about"
        {...userJob}
      />
      <ErrorMessage message={userJob.isValid.errorMessage} />
    </PopupWithForm>
  )
}

export default EditProfilePopup
