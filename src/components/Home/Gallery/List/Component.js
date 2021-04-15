import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import emptyImage from '../../../../images/empty-component.svg';

const Component = ({ imgAlt, imgUrl, name, route }) => {
  return (
    <li className="text-white cursor-pointer">
      <Link to={route}>
        <figure>
          <img
            className="w-full rounded-md"
            src={imgUrl ? imgUrl : emptyImage}
            alt={imgAlt}
          />
        </figure>
        <figcaption className="py-2" style={{ minHeight: '39px' }}>
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
