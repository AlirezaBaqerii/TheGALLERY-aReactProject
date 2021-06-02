import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div
      style={{
        padding: '5px 10px',
        margin: ' 250px auto',
        width: '350px',
        backgroundColor: '#f1f1f1',
      }}
    >
      <h1 style={{ marginBottom: '20px', letterSpacing: '2px' }}>
        invalid link
      </h1>
      <p>
        click to go to the home page <Link to='/'>HOME</Link>
      </p>
    </div>
  );
};

export default About;
