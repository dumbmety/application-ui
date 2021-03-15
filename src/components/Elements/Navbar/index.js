import React from 'react';

import Layout from '../../Layout';
import Simple from './Simple';

const Navbar = () => {
  return (
    <Layout name="Navbar" route="/navbar">
      <Simple />
    </Layout>
  );
};

export default Navbar;
