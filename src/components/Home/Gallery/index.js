import React from 'react'
import PropTypes from 'prop-types'
import BounceLoader from 'react-spinners/BounceLoader'
import { css } from '@emotion/react'

import Menu from './Menu'
import List from './List'

const Gallery = ({ data, loading }) => {
  const override = css`
    display: block;
    margin: 5rem auto;
  `

  let isLoading = (
    <BounceLoader
      color="#6366f1"
      height={35}
      width={4}
      radius={2}
      margin={2}
      css={override}
      loading={loading}
    />
  )
  if (!loading) {
    isLoading = <List data={data} />
  }

  return (
    <main className="py-3 mx-5 my-8">
      <Menu />
      <hr className="my-3 dark:border-gray-700" />
      {isLoading}
    </main>
  )
}

Gallery.propTypes = {
  data: PropTypes.array,
  loading: PropTypes.bool
}

export default Gallery
