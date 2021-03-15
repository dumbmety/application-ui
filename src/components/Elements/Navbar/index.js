import React from 'react';

import Layout from '../../Layout';
import SimpleDark from './SimpleDark';

const Navbar = () => {
  return (
    <Layout name="Navbar" route="/navbar">
      <SimpleDark />
    </Layout>
  );
};

export default Navbar;
