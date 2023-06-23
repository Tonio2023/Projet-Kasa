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
      <div className='flexi'>
        <h2>{title}</h2>
        <img
          src={ChevronSmall}
          alt='Chevron'
          className={`chevron ${isExpanded ? 'expanded' : ''}`}
          onClick={handleChevronClick}
        />
      </div>  
      {isExpanded && (
        <>
          {Array.isArray(content) ? (
            <ul className="item-content">
              {content.map((equipment, index) => (
                <li key={index}>{equipment}</li>
              ))}
            </ul>
          ) : (
            <p className="item-content">{content}</p>
          )}
        </>
      )}
    </div>
  );
};

export default Item;
