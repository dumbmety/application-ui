import React from 'react';
import PropTypes from 'prop-types';

import Menu from './Menu';
import List from './List';

const Gallery = ({ data, loading }) => {
  return (
    <main className="py-3 mx-5 my-8">
      <Menu />
      <hr className="my-3 dark:border-gray-700" />
      <List data={data} isLoading={loading} />
    </main>
  );
};

Gallery.propTypes = {
  data: PropTypes.array,
  loading: PropTypes.bool,
};

export default Gallery;
