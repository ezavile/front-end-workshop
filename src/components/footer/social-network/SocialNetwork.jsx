import React from 'react';

import PropTypes from 'prop-types';

const SocialNetwork = ({ url, site }) => (
  <li className="yta_Footer-socialNetwork-item">
    <a href={url}>
      <span data-icon={`ei-sc-${site}`} data-size="m" />
      <span className="yta_u-onlyRead">{site}</span>
    </a>
  </li>
);

SocialNetwork.propTypes = {
  url: PropTypes.string.isRequired,
  site: PropTypes.string.isRequired,
};

export default SocialNetwork;
