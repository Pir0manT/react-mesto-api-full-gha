import { useContext, useEffect } from 'react'
import { CurrentUserContext } from '../contexts/CurrentUserContext'
import PopupWithForm from './PopupWithForm'
import { useInput } from '../hooks/input.hook'
import ErrorMessage from './ErrorMessage'

const EditAvatarPopup = ({
  isOpen,
  isSaving,
  loadingText,
  onClose,
  onUpdateAvatar,
}) => {
  const currentUser = useContext(CurrentUserContext)
  // const avatarRef = useRef()
  const avatar = useInput('', { isUrl: true })

  useEffect(() => {
    // avatarRef.current.value = currentUser.avatar
    // avatarRef.current.value = ''
    avatar.setValue(currentUser.avatar)
    // avatar.setValue('')
    avatar.clearErrorMessage(true)
  }, [currentUser, isOpen])

  const handleSubmit = (e) => {
    e.preventDefault()
    // onUpdateAvatar({ avatar: avatarRef.current.value })
    onUpdateAvatar({ avatar: avatar.value })
  }

  return (
    <PopupWithForm
      name="avatar"
      isOpen={isOpen}
      onClose={onClose}
      isSaving={isSaving}
      loadingText={loadingText}
      onSubmit={handleSubmit}
      title="Обновить аватар"
      btnTitle="Сохранить"
      btnDisabled={!avatar.isValid.result}
    >
      <input
        required
        className="popup__input"
        type="url"
        placeholder="Ссылка на аватар"
        id="avatar-link"
        name="avatar"
        // ref={avatarRef}
        {...avatar}
      />
      <ErrorMessage message={avatar.isValid.errorMessage} />
    </PopupWithForm>
  )
}

export default EditAvatarPopup
