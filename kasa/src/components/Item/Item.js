import React, { useState } from 'react';
import './Item.css';
import ChevronSmall from '../../img/Chevron-small.png';

const Item = ({ title, content }) => {
  // État pour gérer l'expansion de l'élément
  const [isExpanded, setIsExpanded] = useState(false); // hook useState pour gérer l'état de l'expansion de l'élément. Il initialise isExpanded à false.

  // Gérer le clic sur le chevron
  const handleChevronClick = () => { // fonction handleChevronClick est définie pour inverser la valeur de l'état isExpanded lors du clic sur le chevron.
    setIsExpanded(!isExpanded);
  };

  return ( // Rendu du composant
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
      {isExpanded && ( //Le contenu est affiché uniquement si l'élément est étendu (isExpanded est true).
        <>
          {Array.isArray(content) ? (  //Si le contenu est un tableau (vérifié avec Array.isArray(content)), on affiche une liste
            <ul className="item-content">
              {content.map((equipment, index) => (
                <li key={index}>{equipment}</li>
              ))}
            </ul>
          ) : (                        // Sinon, si le contenu est une chaîne de caractères simple, on affiche un paragraphe 
            <p className="item-content">{content}</p>
          )}
        </>
      )}
    </div>
  );
};

export default Item;
