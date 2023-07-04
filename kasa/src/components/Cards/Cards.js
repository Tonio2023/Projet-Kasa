import React, { useState, useEffect } from 'react';
import './Cards.css';

import Card from '../Card/Card';

const Cards = () => {                              //Le composant Cards est responsable de l'affichage d'une liste de cartes représentant des logements.
  const [logements, setLogements] = useState([]);  //On utilise le hook useState pour gérer un état logements, qui est initialisé avec une valeur vide.

  useEffect(() => {                                //Le hook useEffect (effet de bord) est utilisé pour effectuer une requête asynchrone et récupérer les données des logements à partir d'un fichier JSON local (logements.json).
    const fetchLogements = async () => {
      try {
        const response = await fetch('/logements.json');
        const data = await response.json();
        console.log(data);
        setLogements(data);            //Lorsque les données sont récupérées avec succès, elles sont stockées dans l'état logements en utilisant la fonction setLogements.
      } catch (error) {
        console.error('Une erreur s\'est produite lors de la récupération des logements :', error);
      }
    };

    fetchLogements();    // appel à la fonction fetchLogements qui est définie à l'intérieur du hook useEffect, pour déclencher la récupération des données des logements lorsque le composant Cards est monté pour la première fois.
  }, []);         //La dépendance vide [] dans le tableau de dépendances de useEffect garantit que l'effet ne sera exécuté qu'une seule fois au montage initial du composant.

  return (
    <div className='conteneur'>
      {logements.map((logement) => (               // méthode map: chaque élément du tableau logements est transformé en un composant Card en passant le logement correspondant en tant que prop. La clé (key) est également définie pour chaque carte pour aider à l'identification et à la mise à jour des éléments.
        <Card logement={logement} key={logement.id} />
      ))}
    </div>
  );
};

export default Cards;

