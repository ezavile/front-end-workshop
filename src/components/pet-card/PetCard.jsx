import React from 'react';

import PetCardSchema from './PetCard.schema';

import './pet-card.scss';

const PetCard = ({ id, img, name, details }) => (
  <article className="yta_PetCard">
    <div className="yta_PetCard-img" style={{ backgroundImage: `url(${img})` }} />
    <div className="yta_PetCard-description">
      <h3 className="yta_PetCard-description-name">{name}</h3>
      <p className="yta_PetCard-description-details">{details}</p>
      <p className="yta_PetCard-description-link">
        <a href={`/pet/${id}`} className="yta_Link-outline--primary">
          Adoptar
        </a>
      </p>
    </div>
  </article>
);

PetCard.propTypes = PetCardSchema;

export default PetCard;
