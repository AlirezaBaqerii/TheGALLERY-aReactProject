import React from 'react';
import './SignUp.css';

import { Link } from 'react-router-dom';

const SignUp = () => {
  return (
    <section className='sign-up-section'>
      <div className='sign-up-container'>
        <h1>Create Account</h1>
        <form>
          <label>
            Email
            <input type='email' />
          </label>
          <label>
            password
            <input type='password' />
          </label>
          <button type='submit'>Sign Up</button>
        </form>
        <div className='have-account'>
          <p>
            Already have an account? <Link to='/'>Log in here</Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
