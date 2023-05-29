import React from 'react'
import Logo from './Logo'
const Navigation = ({toggleBurgerDrawer, toggleConsultationDrawer}) => {

  return (
    <nav className='navigation-block'>
        <Logo />
        <button style={{
          cursor: 'none',
          display: 'flex',
          justifyContent: 'center',
          background: 'transparent',
          outline: 'none'
        }}>
          <div className="burger_menu" onClick={toggleBurgerDrawer}>
            <div className="line-1 line"></div>
            <div className="line-2 line"></div>
            <div className="line-3 line"></div>
          </div>
        </button>
          <button className="buttons__consultation" onClick={toggleConsultationDrawer}>
            <span className='buttons__consultation--befor hover'></span>
            <div className="buttons__consultation--name">Консультация</div>
          </button>
          <div className="lang_btn">
            <div className="lang_btn--text">
              ru
            </div>
          </div>
    </nav>
  )
}

export  default Navigation
