import React from 'react';
import PropTypes from 'prop-types';

const HeaderLink = ({ onClick, label }) => (
  <li className="yta_Header-menu-list-item">
    <button type="button" onClick={onClick} className="yta_Link-underline--primary">
      {label}
    </button>
  </li>
);

HeaderLink.propTypes = {
  onClick: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
};

export default HeaderLink;
