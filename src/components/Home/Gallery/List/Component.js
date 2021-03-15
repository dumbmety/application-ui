import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import emptyImage from '../../../../images/empty-component.svg';

const Component = ({ imgAlt, imgUrl, isActive, name, route }) => {
  const wrapperClasses = isActive
    ? 'shadow-sm dark:shadow-none border border-gray-200 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 dark:hover:text-white'
    : 'border border-dashed border-gray-300 dark:border-gray-700 opacity-75 cursor-not-allowed';

  return (
    <li
      className={`bg-white dark:bg-gray-800 dark:text-gray-200 focus:bg-gray-50 dark:focus:bg-gray-700 rounded overflow-hidden cursor-pointer ${wrapperClasses}`}
    >
      <Link to={isActive && route}>
        <figure>
          <img
            className="w-full border-b border-gray-200 dark:border-gray-800"
            src={imgUrl ? imgUrl : emptyImage}
            alt={imgAlt}
          />
        </figure>
        <figcaption className="px-4 py-2" style={{ minHeight: '39px' }}>
          {name}
        </figcaption>
      </Link>
    </li>
  );
};

Component.propTypes = {
  imgAlt: PropTypes.string,
  imgUrl: PropTypes.string,
  isActive: PropTypes.bool,
  name: PropTypes.string,
  route: PropTypes.string,
};

export default Component;
