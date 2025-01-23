import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { styles } from '../styles';
import { navLinks } from '../constants';
import { logo, menu, close, githubicon, xlogo, wantedly } from '../assets';

const Navbar = () => {
  const [active, setActive] = useState('')
  const [toggle, setToggle] = useState(false)

  return (
    <nav 
      className={`${styles.paddingX} w-full flex
      items-center py-5 fixed top-0 z-20
      bg-primary`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0)
          }}
        >
          <img src={logo} alt="logo" className="w-6 h-6 object-contain" />
          <p className='text-white text-[18px] font-bold cursor-pointer flex '>
            Yuhri Shimizu &nbsp;
            <span className='sm:block hidden'> | Student Engineer</span>
          </p>
        </Link>
        <a
            href="https://github.com/matthewyuh246"
            target="_blank"
            rel="noopener noreferrer"
            className="flex"
          >
            <img
              src={githubicon}
              alt="GitHub"
              className="w-8 h-8 object-contain hover:opacity-80"
            />
        </a>
        <a
            href="https://x.com/matthew153215"
            target="_blank"
            rel="noopener noreferrer"
            className="flex"
          >
            <img
              src={xlogo}
              alt="xlogo"
              className="w-10 h-10 object-contain hover:opacity-80"
            />
        </a>
        <a
            href="https://www.wantedly.com/id/matto"
            target="_blank"
            rel="noopener noreferrer"
            className="flex"
          >
            <img
              src={wantedly}
              alt="wantedly"
              className="w-6 h-6 object-contain hover:opacity-80"
            />
        </a>
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((Link) => (
            <li 
              key={Link.id}
              className={`${
                active === Link.title ? "text-white" : "text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(Link.title)}
            >
              <a href={`#${Link.id}`}>{Link.title}</a>
            </li>
          ))}
        </ul>

        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img 
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain cursor-pointer"
          onClick={() => setToggle(!toggle)}
          />

          <div className={`${!toggle ? 'hidden' : 'flex' } p-6 black-gradient absolute
          top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>
            <ul className="list-none flex justify-end items-start flex-col gap-4">
              {navLinks.map((Link) => (
                <li 
                  key={Link.id}
                  className={`${
                    active === Link.title ? "text-white" : "text-secondary"
                  } font-poppins font-medium cursor-pointer text-[16px]`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(Link.title);
                  }}
                  >
                  <a href={`#${Link.id}`}>{Link.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar