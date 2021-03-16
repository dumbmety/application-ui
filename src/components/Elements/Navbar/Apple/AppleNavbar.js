import React from 'react';
import { Link } from 'react-router-dom';
import { HiOutlineMenuAlt4 } from 'react-icons/hi';
import {
  AiFillApple,
  AiOutlineSearch,
  AiOutlineShopping,
} from 'react-icons/ai';

const AppleNavbar = () => {
  return (
    <header className="apple-header">
      <nav className="apple-desktop-nav">
        <ul className="apple-desktop-items">
          <li className="apple-desktop-item">
            <Link to="/navbar">
              <AiFillApple size="1.5rem" />
            </Link>
          </li>
          <li className="apple-desktop-item">
            <Link to="/navbar">Mac</Link>
          </li>
          <li className="apple-desktop-item">
            <Link to="/navbar">iPad</Link>
          </li>
          <li className="apple-desktop-item">
            <Link to="/navbar">iPhone</Link>
          </li>
          <li className="apple-desktop-item">
            <Link to="/navbar">Watch</Link>
          </li>
          <li className="apple-desktop-item">
            <Link to="/navbar">Music</Link>
          </li>
          <li className="apple-desktop-item">
            <Link to="/navbar">Support</Link>
          </li>
          <li className="apple-desktop-item">
            <Link to="/navbar">
              <AiOutlineSearch size="1.5rem" />
            </Link>
          </li>
          <li className="apple-desktop-item">
            <Link to="/navbar">
              <AiOutlineShopping size="1.5rem" />
            </Link>
          </li>
        </ul>
        <ul className="apple-mobile-nav">
          <li className="apple-mobile-menu-button">
            <button>
              <HiOutlineMenuAlt4 size="1.5rem" />
            </button>
          </li>
          <li className="apple-mobile-item">
            <Link to="/navbar">
              <AiFillApple size="1.5rem" />
            </Link>
          </li>
          <li className="apple-mobile-item">
            <Link to="/navbar">
              <AiOutlineShopping size="1.5rem" />
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default AppleNavbar;
