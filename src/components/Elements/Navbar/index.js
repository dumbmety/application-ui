import React from 'react';

import Layout from '../../Layout';
import Apple from './Apple';
import Microsoft from './Microsoft';

const Navbar = () => {
  return (
    <Layout name="Navbar" route="/navbar">
      <Apple />
      <Microsoft />
    </Layout>
  );
};

export default Navbar;
