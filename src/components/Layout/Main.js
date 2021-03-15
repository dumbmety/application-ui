import React from 'react';
import PropTypes from 'prop-types';

const Main = ({ children }) => {
  return <main className="w-full py-16">{children}</main>;
};

Main.propTypes = {
  children: PropTypes.element,
};

export default Main;
