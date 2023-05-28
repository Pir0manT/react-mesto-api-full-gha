import React from 'react'
import logo from '../images/logo.svg'
import { Link } from 'react-router-dom'

const Header = ({ email, route, title, onClick }) => {
  return (
    <header className="header">
      <img
        className="header__logo link-opacity"
        src={logo}
        alt="логотип Место"
      />
      <nav className="header__auth">
        <p className="header__text">{email}</p>
        <Link
          to={route}
          className="header__link link-opacity"
          type="button"
          onClick={onClick}
        >
          {title}
        </Link>
      </nav>
    </header>
  )
}

export default Header
