import React from 'react'

import FeedbackButton from './FeedbackButton'
import ThemeButton from './ThemeButton'

const Menu = () => {
  return (
    <header className="flex items-center justify-between">
      <FeedbackButton />
      <div>
        <ThemeButton />
      </div>
    </header>
  )
}

export default Menu
