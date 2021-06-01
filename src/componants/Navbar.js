import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaTimes, FaBars } from 'react-icons/fa';
// import { useGlobalContext } from '../Context';
import './Navbar.css';

const Navbar = () => {
  const [showLittleNav, setShowLittleNav] = useState(true);
  const [width, setWidth] = useState(window.innerWidth);

  const handleResize = () => {
    if (window.innerWidth <= 950) {
      setShowLittleNav(true);
    } else {
      setShowLittleNav(false);
    }
  };

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    window.addEventListener('resize', handleResize);
  }, []);

  if (showLittleNav) {
    return <LittleNavbar />;
  }

  return <BigNavbar />;
};

export default Navbar;

const LittleNavbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <>
      <Menu toggle={toggle} />
      <nav>
        <div className='nav-container'>
          <div className='logo'>
            <Link to='/'>THE GALLERY</Link>
          </div>
          <button className='toggle-btn' onClick={() => setToggle(!toggle)}>
            {toggle ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </nav>
    </>
  );
};

const Menu = ({ toggle }) => {
  return (
    <section className={`${toggle ? 'menu menu-active' : 'menu'}`}>
      <div className='menu-container'>
        <ul className='menu-links'>
          <li>
            <Link to='/about'>About</Link>
          </li>
          <li>
            <Link to='/ticket'>Ticket</Link>
          </li>
          <li>
            <Link to='/contact'>Contact</Link>
          </li>
          <li>
            <Link to='#'>Other</Link>
          </li>
        </ul>
        <div className='btn-container'>
          <button className='signup-btn signup-menu'>Sign in</button>
        </div>
      </div>
    </section>
  );
};

const BigNavbar = () => {
  return (
    <nav>
      <div className='nav-container'>
        <div className='logo'>
          <Link to='/'>THE GALLERY</Link>
        </div>
        <ul className='nav-links'>
          <li>
            <Link to='/about'>About</Link>
          </li>
          <li>
            <Link to='/ticket'>Ticket</Link>
          </li>
          <li>
            <Link to='/contact'>Contact</Link>
          </li>
          <li>
            <Link to='#'>Other</Link>
          </li>
        </ul>
        <button className='signup-btn'>Sign in</button>
      </div>
    </nav>
  );
};
