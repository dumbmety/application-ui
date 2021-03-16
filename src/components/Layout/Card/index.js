import React from 'react';
import PropType from 'prop-types';
import {
  HiOutlineDeviceMobile,
  HiOutlineDeviceTablet,
  HiOutlineDesktopComputer,
} from 'react-icons/hi';

import './index.css';

const Card = ({ children, title, size, desktop, tablet, mobile }) => {
  return (
    <section className="container px-5 mb-10 sm:mx-auto sm:px-0">
      <div className="overflow-hidden border border-gray-200 rounded-md">
        <header className="flex items-center justify-between px-6 py-3 bg-white border-b border-gray-200">
          <div>
            <h2 className="text-xl">{title}</h2>
          </div>
          <div>
            <button
              onClick={mobile}
              className={`p-2 mx-1 font-semibold transition duration-75 ease-linear ${
                size === 'mobile' ? 'text-white bg-indigo-500' : 'text-gray-600'
              } rounded-md select-none focus:outline-none`}
            >
              <HiOutlineDeviceMobile size="1.2rem" />
            </button>
            <button
              onClick={tablet}
              className={`p-2 mx-1 font-semibold transition duration-75 ease-linear ${
                size === 'tablet' ? 'text-white bg-indigo-500' : 'text-gray-600'
              } rounded-md select-none focus:outline-none`}
            >
              <HiOutlineDeviceTablet size="1.2rem" />
            </button>
            <button
              onClick={desktop}
              className={`p-2 mx-1 font-semibold transition duration-75 ease-linear ${
                size === 'desktop'
                  ? 'text-white bg-indigo-500'
                  : 'text-gray-600'
              } rounded-md select-none focus:outline-none`}
            >
              <HiOutlineDesktopComputer size="1.2rem" />
            </button>
          </div>
        </header>
        <div className="bg-gray-100" style={{ minHeight: '80px' }}>
          {children}
        </div>
      </div>
    </section>
  );
};

Card.propTypes = {
  children: PropType.element,
  title: PropType.string,
  size: PropType.string,
  desktop: PropType.func,
  tablet: PropType.func,
  mobile: PropType.func,
};

export default Card;
