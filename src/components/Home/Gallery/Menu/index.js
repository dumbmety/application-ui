import React from 'react';

import FeedbackButton from './FeedbackButton';
import ThemeButton from './ThemeButton';
import SourceLink from './SourceLink';
import EmailButton from './EmailButton';

const Menu = () => {
  return (
    <header className="flex items-center justify-between">
      <FeedbackButton />
      <div className="flex items-center">
        <ThemeButton />
        <EmailButton />
        <SourceLink />
      </div>
    </header>
  );
};

export default Menu;
