import React from 'react'
import Drawer from 'react-modern-drawer'
import 'react-modern-drawer/dist/index.css'
import facebook from '../../styles/images/facebook.png'
import instagram from '../../styles/images/instagram.png'
import linkedin from '../../styles/images/linkedin.png'
import {CloseIcon} from '../../styles/icons/icons'

const BurgerDrawer = ({isOpen, toggleDrawer}) => {
  const burgerMenuData = [
    {
      link: '#promo',
      text: 'бонус',
      number: '01',
      id: 1,
    },
    {
      link: '#price',
      text: 'прайс',
      number: '02',
      id: 2,
      text_color: '#eb3846'
    },
    {
      link: '#caises',
      text: 'кейсы',
      number: '03',
      id: 3
    },
    {
      link: '#about',
      text: 'о нас',
      number: '04',
      id: 4,
      text_color: '#eb3846'
    },
    {
      link: '#contacts',
      text: 'контакты',
      number: '05',
      id: 5
    }
  ]

  return (
    <Drawer
      open={isOpen}
      onClose={toggleDrawer}
      direction='right'
      lockBackgroundScroll='true'
      className='burger_drawer'
    >
      <div className="burger_drawer--wrapper">
        <ul className="burger_drawer--wrapper__list">
          {burgerMenuData.map(({link,text, number, id, text_color}) => (
            <li className="burger_drawer--wrapper__list--item" key={id}>
              <a className="burger_drawer--wrapper__list--item__link" href={link} style={{color: text_color && text_color}}>
                {number}
                <span className='burger_drawer--wrapper__list--item__link--text' style={{color: text_color && text_color}}>
                  {text}
                </span>
              </a>
            </li>
          ))}
        </ul>
        <div className="burger_drawer--wrapper__social_links">
          <div className="burger_drawer--wrapper__social_links--btn">
            <div className="burger_drawer--wrapper__social_links--btn__befor"/>
            <div className="burger_drawer--wrapper__social_links--btn__img">
              <img src={facebook} alt='social-img' />
            </div>
          </div>
             <div className="burger_drawer--wrapper__social_links--btn">
            <div className="burger_drawer--wrapper__social_links--btn__befor"/>
            <div className="burger_drawer--wrapper__social_links--btn__img">
              <img src={instagram} alt='social-img' />
            </div>
          </div>
             <div className="burger_drawer--wrapper__social_links--btn">
            <div className="burger_drawer--wrapper__social_links--btn__befor"/>
            <div className="burger_drawer--wrapper__social_links--btn__img">
              <img src={linkedin} alt='social-img' />
            </div>
          </div>

        </div>
      </div>

      <div className="burger_drawer--close" onClick={toggleDrawer}>
        <CloseIcon />
      </div>
    </Drawer>
  )
}

export default  BurgerDrawer
