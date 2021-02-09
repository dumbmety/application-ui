import React from 'react'

const Header = () => {
  return (
    <header className="py-3">
      <h1 className="text-5xl font-bold py-3">Application UI</h1>
      <p className="text-gray-600">
        Hi guys, I decided to create different user interfaces <br />
        to learn better{' '}
        <a
          className="font-semibold text-indigo-500 border-b hover:border-indigo-300"
          href="https://reactjs.org"
        >
          React
        </a>
      </p>
    </header>
  )
}

export default Header
