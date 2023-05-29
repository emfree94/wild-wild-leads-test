import React from 'react'
import Drawer from 'react-modern-drawer'
import CloseButton from './CloseButton'
import Whatsapp from '../../styles/icons/whatsapp.svg'
import Telegram from '../../styles/icons/telegram.svg'
import Viber from '../../styles/icons/viber.svg'
import Message from '../../styles/icons/message.svg'

const SocialDrawer = ({isOpen, toggleDrawer}) => (

  <Drawer
    open={isOpen}
    onClose={toggleDrawer}
    direction='right'
    lockBackgroundScroll='true'
    className='social_drawer'
  >
    <div className="social_drawer--menu">
      <a className="social_drawer--menu__link" href="http://web.archive.org/web/20220408055433/https://wa.me/380951798072">
        <div className="social_drawer--menu__link--wrapper">
          <img className='social_drawer--menu__link--image' src={Whatsapp} alt='social icon' />
        </div>
      </a>
      <a className="social_drawer--menu__link" href="http://web.archive.org/web/20220408055433/https://t.me/webking_kiev">
        <div className="social_drawer--menu__link--wrapper">
          <img className='social_drawer--menu__link--image' src={Telegram} alt='social icon' />
        </div>
      </a>
      <a className="social_drawer--menu__link" href="viber://chat?number=380951798072">
        <div className="social_drawer--menu__link--wrapper">
          <img className='social_drawer--menu__link--image' src={Viber} alt='social icon' />
        </div>
      </a>
      <a className="social_drawer--menu__link" href="#contacts">
        <div className="social_drawer--menu__link--wrapper">
          <img className='social_drawer--menu__link--image' src={Message} alt='social icon' />
        </div>
      </a>

    </div>
    <CloseButton toggleDrawer={toggleDrawer} />
  </Drawer>
)

export  default SocialDrawer
