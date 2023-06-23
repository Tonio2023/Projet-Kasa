import React from 'react';
import './Description.css';

const Description = ({ title, location, tags }) => {
  return (
    <div className="description">
      <h2 className="title">{title}</h2>
      <p className="location">{location}</p>
      <div className="tags">
        {tags.map((tag, index) => (
          <p key={index}>{tag}</p>
        ))}
      </div>
    </div>
  );
};

export default Description;
