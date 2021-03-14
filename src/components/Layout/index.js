import React from 'react'
import PropTypes from 'prop-types'

import Navbar from './Navbar'
import Main from './Main'

const Layout = ({ children, name, route }) => {
  return (
    <>
      <Navbar name={name} route={route} />
      <Main>{children}</Main>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.element,
  name: PropTypes.string,
  route: PropTypes.string
}

export default Layout
