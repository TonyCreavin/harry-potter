import React from 'react';
import './ImageCard.css';

function ImageCard({ wizard }) {
  return (
    <div className="image-card">
      <img className="image" src={wizard.image} alt="" />
    </div>
  );
}

export default ImageCard;
