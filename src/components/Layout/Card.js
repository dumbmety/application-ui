import React from 'react';
import PropType from 'prop-types';

const Card = ({ children }) => {
  return (
    <div className="w-6/12 mx-auto mb-10 overflow-hidden border border-gray-200 rounded-md">
      <header className="flex items-center justify-between px-6 py-3 bg-white border-b border-gray-200">
        <div>
          <h2 className="text-xl">Simple</h2>
        </div>
        <div>
          <button className="px-3 py-1 mx-1 font-semibold text-indigo-800 bg-indigo-100 rounded-md select-none focus:outline-none">
            Preview
          </button>
          <button className="px-3 py-1 mx-1 font-semibold text-gray-500 rounded-md select-none focus:outline-none">
            Code
          </button>
        </div>
      </header>
      <div className="bg-gray-100" style={{ minHeight: '80px' }}>
        {children}
      </div>
    </div>
  );
};

Card.propTypes = {
  children: PropType.element,
};

export default Card;
