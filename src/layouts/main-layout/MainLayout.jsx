import React from 'react';
import PropTypes from 'prop-types';

import { Header, Footer } from '../../components';

const MainLayout = ({ children }) => (
  <React.Fragment>
    <Header />
    <main>{children}</main>
    <Footer />
  </React.Fragment>
);

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MainLayout;
