import React, { useState } from 'react';
import './Item.css';
import ChevronSmall from '../../img/Chevron-small.png';

const Item = ({ title, content }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleChevronClick = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className='item'>
      <h2>{title}</h2>
      <img
        src={ChevronSmall}
        alt='Chevron'
        className={`chevron ${isExpanded ? 'expanded' : ''}`}
        onClick={handleChevronClick}
      />
      {isExpanded && <p>{content}</p>}
    </div>
  );
};

export default Item;
