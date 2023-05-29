import React from 'react'
import CloseIcon from '../../styles/icons/plus.svg'

const CloseButton = ({toggleDrawer}) => (
  <div className="drawer_close" onClick={toggleDrawer}>
    <img src={CloseIcon}  alt='close icon'/>
  </div>
)

export default CloseButton
