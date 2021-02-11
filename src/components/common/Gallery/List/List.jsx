import React from 'react'

import Component from './Component'

import { COMPONENTS } from '../../../../constant'

const List = () => {
  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {COMPONENTS.map(component => (
        <Component
          key={component.id}
          imgAlt={component.imgAlt}
          imgUrl={component.imgUrl}
          isActive={component.isActive}
          name={component.name}
          route={component.route}
        />
      ))}
    </ul>
  )
}

export default List
