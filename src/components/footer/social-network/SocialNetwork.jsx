import React from 'react';

import PropTypes from 'prop-types';

const SocialNetwork = ({ site }) => (
  <li className="yta_Footer-socialNetwork-item">
    <a href="#">
      <span data-icon={`ei-sc-${site}`} data-size="m"></span>
      <span className="yta_u-onlyRead">{site}</span>
    </a>
  </li>
);

SocialNetwork.propTypes = {
  site: PropTypes.string.isRequired,
}

export default SocialNetwork;
