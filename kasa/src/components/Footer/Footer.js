import React from 'react'
import './Footer.css';
import Kfoot from '../../img/K-foot.png';
import logofoot from '../../img/logo-foot.png';
import sfoot from '../../img/s-foot.png';
import afoot from '../../img/a-foot.png';



const Footer = () => {
  return (
    <footer>
        <div className='logoFooter'>
          <img src={Kfoot} alt="K-foot"/>
          <img src={logofoot} alt="logo-foot"/>
          <img src={sfoot} alt="s-foot"/>
          <img src={afoot} alt="a-foot"/>
        </div>
        <p>© 2020 Kasa. All rights reserved</p>
    </footer>
  )
}

export default Footer