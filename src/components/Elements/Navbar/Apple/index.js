import React from 'react';
import { HiOutlineMenuAlt4 } from 'react-icons/hi';
import { AiFillApple, AiOutlineSearch, AiOutlineShopping } from 'react-icons/ai';

import Card from '../../../Layout/Card';

const Apple = () => {
  return (
    <>
      <Card title="Apple">
        <header
          className="flex items-center w-full h-12 text-white select-none"
          style={{ background: 'rgba(0,0,0,0.8)' }}
        >
          <nav className="w-full px-3 mx-auto md:px-0 md:w-9/12">
            <ul className="items-center justify-between hidden md:flex">
              <li>
                <a href="#">
                  <AiFillApple size="1.5rem" className="opacity-70 hover:opacity-100" />
                </a>
              </li>
              <li className="opacity-70 hover:opacity-100">
                <a href="#">Mac</a>
              </li>
              <li className="opacity-70 hover:opacity-100">
                <a href="#">iPad</a>
              </li>
              <li className="opacity-70 hover:opacity-100">
                <a href="#">iPhone</a>
              </li>
              <li className="opacity-70 hover:opacity-100">
                <a href="#">Watch</a>
              </li>
              <li className="opacity-70 hover:opacity-100">
                <a href="#">Music</a>
              </li>
              <li className="opacity-70 hover:opacity-100">
                <a href="#">Support</a>
              </li>
              <li className="opacity-70 hover:opacity-100">
                <a href="#">
                  <AiOutlineSearch size="1.5rem" />
                </a>
              </li>
              <li className="opacity-70 hover:opacity-100">
                <a href="#">
                  <AiOutlineShopping size="1.5rem" />
                </a>
              </li>
            </ul>
            <ul className="flex items-center justify-between md:hidden">
              <li className="flex items-center">
                <button className="opacity-70 hover:opacity-100 focus:outline-none">
                  <HiOutlineMenuAlt4 size="1.5rem" />
                </button>
              </li>
              <li className="opacity-70 hover:opacity-100">
                <a href="#">
                  <AiFillApple size="1.5rem" />
                </a>
              </li>
              <li className="opacity-70 hover:opacity-100">
                <a href="#">
                  <AiOutlineShopping size="1.5rem" />
                </a>
              </li>
            </ul>
          </nav>
        </header>
      </Card>
    </>
  );
};

export default Apple;
