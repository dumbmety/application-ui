import React from 'react';

const Header = () => {
  return (
    <header className="py-1 mx-5 text-white">
      <h1 className="py-3 text-5xl font-bold">Application UI</h1>
      <p className="text-gray-300">
        Hi guys, I decided to create different user interfaces <br />
        to learn better{' '}
        <a
          className="border-b border-teal-100 font-semibold text-teal-300 hover:border-teal-500"
          href="https://reactjs.org"
          target="_blank"
          rel="noreferrer"
        >
          React
        </a>
      </p>
    </header>
  );
};

export default Header;
