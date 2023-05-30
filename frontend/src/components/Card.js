import { useContext } from 'react'
import { CurrentUserContext } from '../contexts/CurrentUserContext'

function Card({ card, handleClick, handleLikeClick, handleDeleteClick }) {
  const { name, link, owner, likes } = card
  const currentUser = useContext(CurrentUserContext)
  const itsMyCard = owner._id === currentUser._id
  const isLiked = likes.some((like) => like._id === currentUser._id)

  return (
    <li className="element">
      {itsMyCard && (
        <button
          className="element__delete link-opacity"
          type="button"
          aria-label="удалить"
          onClick={handleDeleteClick}
        />
      )}
      <img
        className="element__image"
        src={link}
        alt={name}
        onClick={handleClick}
      />
      <div className="element__description">
        <h2 className="element__title">{name}</h2>
        <div className="element__like_container">
          <button
            className={`element__heart ${isLiked && 'element__heart-active'}`}
            type="button"
            aria-label="нравится"
            onClick={handleLikeClick}
          />
          <div className="element__heart-count">{likes.length}</div>
        </div>
      </div>
    </li>
  )
}

export default Card
