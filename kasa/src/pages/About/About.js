import React from 'react'
import Headliner from '../../components/Headliner/Headliner'
import Aboutimg from '../../img/About-img.jpg'
import Collapse from '../../components/Collapse/Collapse'
import './About.css'

const About = () => {
  return (
    <div className='about'>
        <Headliner id='aboutHeadCard' image={Aboutimg}></Headliner>
        <Collapse />
          
    </div>
  )
}

export default About
