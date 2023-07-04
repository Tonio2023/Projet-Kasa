import React from 'react';
import { Link } from 'react-router-dom'
import './Card.css';

const Card = ({ logement }) => {  //Le composant Card est responsable de l'affichage d'une carte représentant un logement.  Il reçoit un objet logement en tant que prop.
    return (
      // Utilisation du composant Link pour créer un lien vers la page de détails du logement. Le chemin du lien est généré en utilisant l'ID du logement.
      <Link to={`/logement/${logement.id}`} className="card-link"> 
        <div key={logement.id} className="card">                
          <img src={logement.cover} alt={logement.title} />
          <h2 className="card-title">{logement.title}</h2>
        </div>
      </Link>
    );
  }; 

export default Card;
