import React from 'react'
import Headliner from '../../components/Headliner/Headliner'
import Aboutimg from '../../img/About-img.jpg'
import Collapse from '../../components/Collapse/Collapse'

const About = () => {
  return (
    <div>
        <Headliner image={Aboutimg}></Headliner>
        <Collapse />
          
    </div>
  )
}

export default About
