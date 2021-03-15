import React from 'react';
import PropTypes from 'prop-types';

import Component from './Component';

const List = ({ data, isLoading }) => {
  let loading = (
    <>
      <Component />
      <Component />
      <Component />
      <Component />
      <Component />
      <Component />
      <Component />
    </>
  );

  if (!isLoading) {
    loading = data.map(component => (
      <Component
        key={component.id}
        imgAlt={component.imgAlt}
        imgUrl={component.imgUrl}
        isActive={component.isActive}
        name={component.name}
        route={component.route}
      />
    ));
  }

  return (
    <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {loading}
    </ul>
  );
};

List.propTypes = {
  data: PropTypes.array,
  isLoading: PropTypes.bool,
};

export default List;
