import React, { useState, useEffect } from 'react';
import './Cards.css';

import Card from '../Card/Card';

const Cards = () => {
  const [logements, setLogements] = useState([]);

  useEffect(() => {
    const fetchLogements = async () => {
      try {
        const response = await fetch('/logements.json');
        const data = await response.json();
        console.log(data);
        setLogements(data);
      } catch (error) {
        console.error('Une erreur s\'est produite lors de la récupération des logements :', error);
      }
    };

    fetchLogements();
  }, []);

  return (
    <div className='conteneur'>
      {logements.map((logement) => (
        <Card logement={logement} key={logement.id} />
      ))}
    </div>
  );
};

export default Cards;

