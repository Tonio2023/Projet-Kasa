import React, { useState } from 'react';
import './Carousel.css';

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPreviousSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const currentImage = images[currentIndex];

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
