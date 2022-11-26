import React from 'react';
import './Card.css';
import Wizards from './Wizards';
import ImageCard from './ImageCard';

function Card({ wizard }) {
  return (
    <div className="wizard-card">
      <Wizards wizard={wizard} />
      <ImageCard wizard={wizard} />
    </div>
  );
}

export default Card;
