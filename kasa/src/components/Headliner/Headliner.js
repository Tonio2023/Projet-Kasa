import React from 'react'
import './Headliner.css'

const Headliner = ({ image, title }) => { 
  return (
    <div className='headCard'>
      <img src={image} alt="Image d'illustration" />
      {title && <p>{title}</p>} 
    </div>
  );
};
export default Headliner
