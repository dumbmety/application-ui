import React from 'react'

import Menu from './Menu/Menu'
import List from './List/List'

const Gallery = () => {
  return (
    <main className="py-3 mx-5 my-8">
      <Menu />
      <hr className="my-3" />
      <List />
    </main>
  )
}

export default Gallery
