import React from 'react'
import Logo from '../logo/Logo'
const Navigation = () => {

  return (
    <nav className='navigation-block wrapper'>
        <Logo />
        <div className="burger_menu">
          <div className="line-1 line"></div>
          <div className="line-2 line"></div>
          <div className="line-3 line"></div>
        </div>
        <div className="buttons__wrapper">
          <button className="buttons__wrapper--consultation">
            <span className='buttons__wrapper--consultation__befor hover'></span>
            <span className="buttons__wrapper--consultation__name">Консультация</span>
          </button>
          <div className="buttons__wrapper--lang-btn">
            <div className="buttons__wrapper--lang-btn__text">
              ru
            </div>
          </div>
        </div>
    </nav>
  )
}

export  default Navigation
