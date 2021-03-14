import React from 'react'
import PropTypes from 'prop-types'

const Main = ({ children }) => {
  return (
    <main
      className="flex items-center justify-center w-full"
      style={{ height: 'calc(100vh - 43.75px)' }}
    >
      {children}
    </main>
  )
}

Main.propTypes = {
  children: PropTypes.element
}

export default Main
