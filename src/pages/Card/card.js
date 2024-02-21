// Card2.js
import React from 'react';
import './Card.css';
import cardData from '../../data/CardsData'; // Import the card data

const Card2 = () => {
  return (
    <div>
      {cardData.map((card) => (
        <div key={card.id} className="card">
          <img src={card.image.url} alt={card.name} />
          <div className="card__content">
            <p className="card__title">{card.name}</p>
            <p className="card__description">{card.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

// Rest of the Card2 component and styling...

export default Card2;
