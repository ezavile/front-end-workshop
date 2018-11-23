import React from 'react';
import PropTypes from 'prop-types';

import PetCard, { PetCardSchema } from '../pet-card';

import './list-pets.scss';

const ListPets = ({ pets }) => (
  <div className="yta_ListPets">
    {pets.map(pet => (
      <PetCard key={pet.id} {...pet} />
    ))}
  </div>
);

ListPets.propTypes = {
  pets: PropTypes.arrayOf(PetCardSchema).isRequired,
};

export default ListPets;
