import PropTypes from 'prop-types';

const PetCardSchema = PropTypes.shape({
  id: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  details: PropTypes.string.isRequired,
}).isRequired;

export default PetCardSchema;
