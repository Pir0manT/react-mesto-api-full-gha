import { useContext } from 'react'
import Card from './Card'
import { CurrentUserContext } from '../contexts/CurrentUserContext'

function Main({
  onEditAvatar,
  onEditProfile,
  onAddPlace,
  onCardClick,
  cards,
  onCardLike,
  onCardDelete,
}) {
  const currentUser = useContext(CurrentUserContext)

  return (
    <main>
      <section className="profile" aria-label="Профиль пользователя">
        <img
          className="profile__avatar"
          src={currentUser.avatar}
          alt="Фотография пользователя"
        />
        <button
          className="profile__edit"
          type="button"
          onClick={onEditAvatar}
        />
        <div className="profile__info">
          <div className="profile__container">
            <h1 className="profile__title">{currentUser.name}</h1>
            <button
              className="profile__edit-button link-opacity"
              type="button"
              aria-label="редактировать профиль"
              onClick={onEditProfile}
            />
          </div>
          <p className="profile__subtitle">{currentUser.about}</p>
        </div>
        <button
          className="profile__add-button link-opacity"
          type="button"
          aria-label="Добавить картинку"
          onClick={onAddPlace}
        />
      </section>
      <section className="elements" aria-label="Различные фотографии">
        <ul className="elements__grid">
          {cards.map((card) => (
            <Card
              key={card._id}
              card={card}
              handleClick={() => onCardClick(card)}
              handleLikeClick={() => onCardLike(card)}
              handleDeleteClick={() => onCardDelete(card)}
            />
          ))}
        </ul>
      </section>
    </main>
  )
}

export default Main
