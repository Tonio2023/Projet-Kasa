import React from 'react';
import { Link } from 'react-router-dom'
import './Card.css';

const Card = ({ logement }) => {
    return (
      <Link to={`/logement/${logement.id}`} className="card-link">
        <div key={logement.id} className="card">
          <img src={logement.cover} alt={logement.title} />
          <h2 className="card-title">{logement.title}</h2>
        </div>
      </Link>
    );
  }; 

export default Card;
