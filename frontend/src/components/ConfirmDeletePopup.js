import PopupWithForm from './PopupWithForm'

const ConfirmDeletePopup = ({
  isOpen,
  isSaving,
  loadingText,
  onClose,
  onDeleteCard,
}) => {
  const handleOnSubmit = (e) => {
    e.preventDefault()
    onDeleteCard()
  }

  return (
    <PopupWithForm
      title="Вы уверены?"
      name="confirm"
      btnTitle="Да"
      isOpen={isOpen}
      isSaving={isSaving}
      loadingText={loadingText}
      onClose={onClose}
      onSubmit={handleOnSubmit}
      isConfirmPopup={true}
    />
  )
}

export default ConfirmDeletePopup
