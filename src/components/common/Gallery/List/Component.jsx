import React from 'react'
import PropTypes from 'prop-types'

const Component = ({ imgAlt, imgUrl, isActive, name, route }) => {
  const clasess = isActive
    ? 'shadow-sm border border-gray-200 hover:bg-gray-50'
    : 'border border-dashed border-gray-300 opacity-75 cursor-not-allowed'

  return (
    <a
      href={isActive ? route : null}
      className={`bg-white focus:bg-gray-50 rounded overflow-hidden cursor-pointer ${clasess}`}
    >
      <figure>
        <img
          className="w-full border-b border-gray-200"
          src={imgUrl}
          alt={imgAlt}
        />
      </figure>
      <figcaption>
        <h3 className="py-2 px-4">{name}</h3>
      </figcaption>
    </a>
  )
}

Component.propTypes = {
  imgAlt: PropTypes.string,
  imgUrl: PropTypes.string,
  isActive: PropTypes.boolean,
  name: PropTypes.string,
  route: PropTypes.string
}

export default Component
