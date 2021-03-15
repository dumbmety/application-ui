import React from 'react';

import Layout from '../../Layout';
import Apple from './Apple';

const Navbar = () => {
  return (
    <Layout name="Navbar" route="/navbar">
      <Apple />
    </Layout>
  );
};

export default Navbar;
