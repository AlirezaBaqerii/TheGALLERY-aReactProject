import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaTimes, FaBars } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  // const navbarStyles = {
  //   position: 'fixed',
  //   height: '60px',
  //   width: '100%',
  //   backgroundColor: 'grey',
  //   textAlign: 'center',
  // };
  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    setTimeout(() => {
      // console.log(`currentScrollPos: ${currentScrollPos}`);
      setVisible(
        (prevScrollPos > currentScrollPos &&
          prevScrollPos - currentScrollPos > 70) ||
          currentScrollPos < 30
      );
      // console.log();
      // console.log(`currPos: ${currentScrollPos}`);
      // console.log(`prevPos: ${prevScrollPos}`);
      // console.log('-----------');
      setPrevScrollPos(currentScrollPos);
    }, 150);
  };
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos, visible, handleScroll]);

  const [showBigNav, setShowBigNav] = useState();

  const getScreenWidth = () => {
    if (window.innerWidth > 700) {
      setShowBigNav(true);
    } else {
      setShowBigNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener('resize', getScreenWidth);
  }, []);

  if (showBigNav) {
    return <BigNavbar visible={visible} />;
  }
  return <LittleNav visible={visible} />;
};

const LittleNav = ({ visible }) => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      <nav className={`${visible ? 'nav show-nav' : 'nav'}`}>
        <div className='nav-container'>
          <div className='logo'>
            <Link to='/'>
              <div className='logo-border'>
                <h3>THE</h3>
                <h3> GALLERY</h3>
              </div>
            </Link>
          </div>
          <div>
            <button className='menu-btn' onClick={() => setShowMenu(!showMenu)}>
              {showMenu ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

const BigNavbar = ({ visible }) => {
  return (
    <>
      <nav className={`${visible ? 'nav show-nav' : 'nav'}`}>
        <div className='nav-container'>
          <div className='logo'>
            <Link to='/'>
              <div className='logo-border'>
                <h3>THE</h3>
                <h3> GALLERY</h3>
              </div>
            </Link>
          </div>
          <div className='nav-list'>
            <ul>
              <li>
                <Link to=''> About.</Link>
              </li>
              <li>
                <Link to=''>Ticket</Link>
              </li>
              <li>
                <Link to=''>Contact</Link>
              </li>
              <li>
                <Link to=''>Other</Link>
              </li>
              <button className='signup-btn'>Sign Up</button>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
