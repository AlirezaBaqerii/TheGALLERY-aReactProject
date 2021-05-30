import React from 'react';
import Hero from '../componants/Hero';
import CartList from '../componants/CartList';
import Filter from '../componants/Filter';

// import './Home.css';

const Home = () => {
  return (
    <>
      <Hero />
      <Filter />
      <CartList />
    </>
  );
};

export default Home;
