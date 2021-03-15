import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

import Navbar from './Navbar';
import Main from './Main';

const Layout = ({ children, name, route }) => {
  return (
    <>
      <Helmet>
        <title>{`${name} - Application UI`}</title>
      </Helmet>
      <Navbar name={name} route={route} />
      <Main>{children}</Main>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.element,
  name: PropTypes.string,
  route: PropTypes.string,
};

export default Layout;
