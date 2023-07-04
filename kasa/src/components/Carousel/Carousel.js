import React, { useState } from 'react';
import './Carousel.css';

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);    //On utilise le hook useState pour créer une variable d'état currentIndex qui représente l'index de l'image actuellement affichée dans le carrousel

  const goToPreviousSlide = () => {    // fonction goToPreviousSlide qui sera appelée lorsque l'utilisateur clique sur le bouton précédent. Elle met à jour l'index de l'image actuelle en soustrayant 1 à l'index précédent. Si l'index est déjà à 0, on le met à images.length - 1 pour afficher la dernière image.
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const goToNextSlide = () => {        // fonction goToNextSlide qui sera appelée lorsque l'utilisateur clique sur le bouton suivant. Elle met à jour l'index de l'image actuelle en ajoutant 1 à l'index précédent. Si l'index est déjà à images.length - 1, on le met à 0 pour afficher la première image.
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const currentImage = images[currentIndex];  //récupèration de l'image actuelle en utilisant currentIndex pour accéder à l'élément correspondant dans le tableau des images.

  if (images.length === 1) {
    // Si vous n'avez qu'une seule image, retournez simplement l'image sans les boutons et la numérotation
    return <div className="carousel">
    <img src={currentImage} alt="Slide" />
    </div>
  }

  return (
    <div className="carousel">
        <img src={currentImage} alt="Slide" />

        <div className="navigation">
          <button className='previous' onClick={goToPreviousSlide}>
            <i className='fas fa-chevron-left'></i>
          </button>
          <button className='next' onClick={goToNextSlide}>
            <i className='fas fa-chevron-right'></i>
          </button>
        </div>
        <div className="counter">{currentIndex + 1}/{images.length}</div>
    </div>
  );
};

export default Carousel;
