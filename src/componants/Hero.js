import React from 'react';
import './Hero.css';

import Aos from 'aos';
import 'aos/dist/aos.css';

const Hero = () => {
  React.useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);

  return (
    <>
      <section className='hero'>
        <div className='hero-container'>
          <div className='hero-text-container'>
            <h1 className='hero-text'>Wellcome to THE GALLERY</h1>
          </div>
        </div>
      </section>

      <section className='god-adam'>
        <div
          className='adam'
          data-aos='fade-right'
          // data-aos-anchor='#example-anchor'
          data-aos-offset='200'
          data-aos-duration='80000'
        >
          <h1>Discover</h1>
        </div>
        <div
          className='god'
          data-aos='fade-left'
          // data-aos-anchor='#example-anchor'
          data-aos-offset='200'
          data-aos-duration='80000'
        >
          <h1>the ART</h1>
        </div>
      </section>
    </>
  );
};

export default Hero;
