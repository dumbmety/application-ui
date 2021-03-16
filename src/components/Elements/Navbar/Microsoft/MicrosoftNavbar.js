import React from 'react';
import { Link } from 'react-router-dom';
import {
  FiArrowDown,
  FiSearch,
  FiShoppingCart,
  FiUserPlus,
} from 'react-icons/fi';

import Logo from '../../../../images/microsoft-logo.png';

const MicrosoftNavbar = () => {
  return (
    <header className="microsoft-header">
      <div className="microsoft-wrapper">
        <nav className="microsoft-nav">
          <ul className="microsoft-items">
            <li className="microsoft-item">
              <Link to="/navbar/microsoft" className="microsoft-link">
                <img
                  className="microsoft-logo"
                  src={Logo}
                  alt="Microsoft Logo"
                />
              </Link>
            </li>
            <li className="microsoft-item">
              <Link to="/navbar/microsoft" className="microsoft-link">
                <span>Microsoft 365</span>
              </Link>
            </li>
            <li className="microsoft-item">
              <Link to="/navbar/microsoft" className="microsoft-link">
                <span>Office</span>
              </Link>
            </li>
            <li className="microsoft-item">
              <Link to="/navbar/microsoft" className="microsoft-link">
                <span>Windows</span>
              </Link>
            </li>
            <li className="microsoft-item">
              <Link to="/navbar/microsoft" className="microsoft-link">
                <span>Surface</span>
              </Link>
            </li>
            <li className="microsoft-item">
              <Link to="/navbar/microsoft" className="microsoft-link">
                <span>Xbox</span>
              </Link>
            </li>
            <li className="microsoft-item">
              <Link to="/navbar/microsoft" className="microsoft-link">
                <span>Deals</span>
              </Link>
            </li>
            <li className="microsoft-item">
              <Link to="/navbar/microsoft" className="microsoft-link">
                <span>Support</span>
              </Link>
            </li>
          </ul>
        </nav>
        <ul className="microsoft-items">
          <li className="microsoft-item item-icon">
            <span>All</span>
            <FiArrowDown size="1.2rem" />
          </li>
          <li className="microsoft-item item-icon">
            <span>Search</span>
            <FiSearch size="1.2rem" />
          </li>
          <li className="microsoft-item item-icon">
            <span>Cart</span>
            <FiShoppingCart size="1.2rem" />
          </li>
          <li className="microsoft-item item-icon">
            <span>Sign in</span>
            <FiUserPlus size="1.2rem" />
          </li>
        </ul>
      </div>
    </header>
  );
};

export default MicrosoftNavbar;
