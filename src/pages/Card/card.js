import React from 'react';
import './Card.css'; 
import cardData from '../../data/CardsData';
import { Tilt } from 'react-tilt';

const SkillCard2 = () => {
  return (
    <div className='transparent'>
      <div className="container">
        <div className="grid-container">
          {cardData.map((card) => (
            <Tilt key={card.id}>
              <div className="card">
                <div className="card__title">{card.title}</div>
                <div className="card__content">
                  <p className="card__name">{card.name}</p>
                  <ul className="card__description">
                    {card.description.map((point, index) => (
                      <li key={index}>{point}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </Tilt>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillCard2;
