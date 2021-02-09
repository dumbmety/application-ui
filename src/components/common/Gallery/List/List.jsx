import React from 'react'

import Component from './Component'

import components from '../../../../constant/components.json'

const List = () => {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {components.map(component => (
        <Component
          key={component.id}
          imgAlt={component.imgAlt}
          imgUrl={component.imgUrl}
          isActive={component.isActive}
          name={component.name}
          route={component.route}
        />
      ))}
    </section>
  )
}

export default List
