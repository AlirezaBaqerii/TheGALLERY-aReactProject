import React from 'react';

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
        About this site
      </h1>
      <p>
        this is a project build with React js and uses{' '}
        <a target='_blank' href='https://api.artic.edu/docs/#introduction'>
          Art Institute of Chicago API
        </a>
      </p>
    </div>
  );
};

export default About;
