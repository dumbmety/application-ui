import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const Navbar = ({ name, route }) => {
  return (
    <header className="py-2 bg-white shadow-sm">
      <div className="container relative flex items-center mx-auto">
        <Link to="/" className="absolute">
          <svg
            className="w-5 h-5 text-gray-500 transition duration-100 ease-linear hover:text-gray-700"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
        </Link>
        <Link to={route} className="w-full text-center">
          <h1 className="text-lg font-semibold text-gray-800">{name}</h1>
        </Link>
      </div>
    </header>
  )
}

Navbar.propTypes = {
  name: PropTypes.string,
  route: PropTypes.string
}

export default Navbar
