import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import './Banner.css';
import K from '../../img/K.png'
import logo from '../../img/logo.png'
import s from '../../img/s.png'
import a from '../../img/a.png'

const Banner = () => {
  const location = useLocation()

  return (
    <header>
        <div className='logo'>
            <img src={K} alt='K du logo de kasa'></img>
            <img src={logo} alt='logo de kasa'></img>
            <img src={s} alt='s du logo de kasa'></img>
            <img src={a} alt='a du logo de kasa'></img>
        </div>
        <nav>
          <NavLink exact to='/' activeClassName='active'>
            Accueil
          </NavLink>
          <NavLink to='/about' activeClassName='active'>
            A propos
          </NavLink>
        </nav>
        
      
    </header>
  )
}

export default Banner
