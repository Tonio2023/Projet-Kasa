import React from 'react';
import './HostInfo.css';

const HostInfo = ({ host, rating }) => {
  // Fonction pour générer les étoiles en fonction de la notation
  const renderStars = (rating) => {
    // Calculer le nombre d'étoiles remplies
    const filledStars = Math.round(rating);
    // Calculer le nombre d'étoiles vides
    const emptyStars = 5 - filledStars;

    const stars = [];

    // Ajouter les étoiles remplies
    for (let i = 0; i < filledStars; i++) {
      stars.push(<i className="fas fa-star full" key={`filled-${i}`} />);
    }

    // Ajouter les étoiles vides
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<i className="fas fa-star grey" key={`empty-${i}`} />);
    }

    return stars;
  };

  return (
    <div className="host-info">
      <div className="host">
        <p className="host-name">{host.name}</p>
        <img src={host.picture} alt={host.name} className="host-image" />
      </div>
      <div className="rating">
        <p>{renderStars(rating)}</p>
      </div>
    </div>
  );
};

export default HostInfo;
