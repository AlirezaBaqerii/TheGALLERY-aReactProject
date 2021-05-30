import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  // const [prevScrollPos, setPrevScrollPos] = useState(0);
  // const [visible, setVisible] = useState(false);

  // // const navbarStyles = {
  // //   position: 'fixed',
  // //   height: '60px',
  // //   width: '100%',
  // //   backgroundColor: 'grey',
  // //   textAlign: 'center',
  // // };

  // const handleScroll = () => {
  //   const currentScrollPos = window.pageYOffset;
  //   setTimeout(() => {
  //     console.log(`currentScrollPos: ${currentScrollPos}`);
  //     setVisible(
  //       (prevScrollPos > currentScrollPos &&
  //         prevScrollPos - currentScrollPos > 70) ||
  //         currentScrollPos < 30
  //     );
  //     console.log();
  //     console.log(`currPos: ${currentScrollPos}`);
  //     console.log(`prevPos: ${prevScrollPos}`);

  //     console.log('-----------');
  //     setPrevScrollPos(currentScrollPos);
  //   }, 150);
  // };

  // useEffect(() => {
  //   window.addEventListener('scroll', handleScroll);

  //   return () => window.removeEventListener('scroll', handleScroll);
  // }, [prevScrollPos, visible, handleScroll]);

  return (
    <>
      <nav className={'nav show-nav'}>
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
              <button className='signup-btn' onClick={<Link to='sign-up' />}>
                Sign Up
              </button>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
