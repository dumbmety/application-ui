import React from 'react';
import PropType from 'prop-types';
import {
  HiOutlineDeviceMobile,
  HiOutlineDeviceTablet,
  HiOutlineDesktopComputer,
} from 'react-icons/hi';

import './index.css';

const Card = ({ children, title, size, desktop, tablet, mobile }) => {
  let boxContentWidth;
  switch (size) {
    case 'desktop':
      boxContentWidth = 'w-full';
      break;
    case 'tablet':
      boxContentWidth = 'w-full md:w-6/12';
      break;
    case 'mobile':
      boxContentWidth = 'w-full sm:w-6/12 md:w-4/12';
      break;
    default:
      boxContentWidth = 'w-full';
  }

  return (
    <section className="box">
      <div className="box-wrapper">
        <header className="box-info">
          <div>
            <h2 className="box-info__title">{title}</h2>
          </div>
          <div>
            <button
              onClick={mobile}
              className={`box-info__button ${
                size === 'mobile' ? 'text-white bg-indigo-500' : 'text-gray-600'
              }`}
            >
              <HiOutlineDeviceMobile size="1.2rem" />
            </button>
            <button
              onClick={tablet}
              className={`box-info__button ${
                size === 'tablet' ? 'text-white bg-indigo-500' : 'text-gray-600'
              }`}
            >
              <HiOutlineDeviceTablet size="1.2rem" />
            </button>
            <button
              onClick={desktop}
              className={`box-info__button ${
                size === 'desktop'
                  ? 'text-white bg-indigo-500'
                  : 'text-gray-600'
              }`}
            >
              <HiOutlineDesktopComputer size="1.2rem" />
            </button>
          </div>
        </header>
        <div className="box-content">
          <iframe src="/navbar/apple" title={title} className={boxContentWidth}>
            {children}
          </iframe>
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
