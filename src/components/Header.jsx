import React, {useState} from 'react'
import Navigation from './Navigation'
import HeaderMenu from './HeaderMenu'
import {HeaderAnimationIcon} from '../styles/icons/icons'
import socialIcon from '../styles/images/call.png'
import BurgerDrawer from './drawers/Burger'
import ConsultationDrawer from './drawers/Consultation'
import SocialDrawer from './drawers/Social'
import {ToastContainer} from 'react-toastify'
import {Animated} from "react-animated-css";
import 'react-toastify/dist/ReactToastify.css';

const Header = () => {
  const [isOpenBurger, setIsOpenBurger] = useState(false)
  const [isOpenConsultation, setIsOpenConsultation] = useState(false)
  const [isOpenSocial, setIsOpenSocial] = useState(false)
  const toggleBurgerDrawer = () => {
    setIsOpenBurger((prevState) => !prevState)
  }

  const toggleConsultationDrawer = () => {
    setIsOpenConsultation((prevState) => !prevState)
  }

  const toggleSocialDrawer = () => {
    setIsOpenSocial((prevState) => !prevState)
  }

  return (
    <>
      <Animated
        animationIn='fadeIn'
        animationOut='fadeOut'
        animationInDuration={1000}
        isVisible={true}
      >
        <section className='header' style={{clipPath: (isOpenBurger || isOpenConsultation || isOpenSocial ) ? 'none' : null}}>
          <div className="wrapper">
            <Navigation toggleBurgerDrawer={toggleBurgerDrawer} toggleConsultationDrawer={toggleConsultationDrawer} />
            <div className="main_wrapper">
              <HeaderMenu />
              <div className="main_wrapper--info">
                <div className="main_wrapper--info__animation-wrapper">
                  <HeaderAnimationIcon />
                </div>
                <Animated
                  animationIn='zoomIn'
                  animationOut='zoomOut'
                  animationInDuration={700}
                  a
                  isVisible={true}
                >
                  <h1 className="main_wrapper--info__title">
                    Продающие сайты	с
                    <span>высокой конверсией</span>
                  </h1>
                </Animated>

              </div>
              <button className='main_wrapper--btn' onClick={toggleSocialDrawer}>
                <div className="main_wrapper--btn__wrapper">
                  <div className="main_wrapper--btn__wrapper--img">
                    <img src={socialIcon} alt='social-icon'/>
                  </div>
                  <span className='main_wrapper--btn__wrapper--text'>кнопка связи</span>
                </div>
                <div className="main_wrapper--btn__border">

                </div>
              </button>
            </div>
          </div>
          <BurgerDrawer toggleDrawer={toggleBurgerDrawer} isOpen={isOpenBurger} />
          <ConsultationDrawer toggleDrawer={toggleConsultationDrawer} isOpen={isOpenConsultation} />
          <SocialDrawer toggleDrawer={toggleSocialDrawer} isOpen={isOpenSocial} />
          <ToastContainer
            position="top-center"
            autoClose={1500}
            closeButton={false}
            hideProgressBar={true}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable={false}
            pauseOnHover
            theme="light"
          />
        </section>
        <section className='our-works'/>
      </Animated>
    </>
  )
}

export default  Header
