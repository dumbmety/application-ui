import React, { useState } from 'react';

import './index.css';
import MicrosoftNavbar from './MicrosoftNavbar';
import Card from '../../../Layout/Card';

const Microsoft = () => {
  const [size, setSize] = useState('desktop');

  const handleDesktopSize = () => setSize('desktop');
  const handleTabletSize = () => setSize('tablet');
  const handleMobilepSize = () => setSize('mobile');

  return (
    <Card
      title="Microsoft"
      route="microsoft"
      size={size}
      desktop={handleDesktopSize}
      tablet={handleTabletSize}
      mobile={handleMobilepSize}
    >
      <MicrosoftNavbar />
    </Card>
  );
};

export default Microsoft;
