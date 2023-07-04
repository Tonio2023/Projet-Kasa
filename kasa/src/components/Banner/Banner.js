import React from 'react'
import { NavLink, useLocation } from 'react-router-dom' //composant NavLink de react-router-dom pour créer des liens de navigation. Le hook useLocation est utilisé pour obtenir l'emplacement actuel.
import './Banner.css';
import K from '../../img/K.png'
import logo from '../../img/logo.png'
import s from '../../img/s.png'
import a from '../../img/a.png'
import door from '../../img/door.png'

const Banner = () => {
  const location = useLocation()

  return (
    <header>
        <div className='logo'>
            <img src={K} alt='K du logo de kasa'></img>
            <img src={logo} alt='logo de kasa'></img>
            <img src={door} alt='logo de kasa 2'></img>
            <img src={s} alt='s du logo de kasa'></img>
            <img src={a} alt='a du logo de kasa'></img>
        </div>
        <nav>
          <NavLink to='/' >
            Accueil
          </NavLink>
          <NavLink to='/about' >
            A propos
          </NavLink>
        </nav>
        
      
    </header>
  )
}

export default Banner
