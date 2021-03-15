import React from 'react'
import PropTypes from 'prop-types'

import Header from './Header'
import Gallery from './Gallery'

const Home = ({ data }) => {
  return (
    <div className="container py-12 mx-auto text-gray-800">
      <Header />
      <Gallery data={data} />
    </div>
  )
}

Home.propTypes = {
  data: PropTypes.array
}

export default Home
