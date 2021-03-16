import React, { useState } from 'react';

import './index.css';
import AppleNavbar from './AppleNavbar';
import Card from '../../../Layout/Card';

const Apple = () => {
  const [size, setSize] = useState('desktop');

  const handleDesktopSize = () => setSize('desktop');
  const handleTabletSize = () => setSize('tablet');
  const handleMobilepSize = () => setSize('mobile');

  return (
    <Card
      title="Apple"
      size={size}
      desktop={handleDesktopSize}
      tablet={handleTabletSize}
      mobile={handleMobilepSize}
    >
      <AppleNavbar />
    </Card>
  );
};

export default Apple;
