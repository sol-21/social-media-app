import React from 'react';
import './auth.css';
import Logo from '../../img/logo.png';

const Auth = () => {
  return (
    <div className='auth'>
      <div className='auth-left'>
        <img src={Logo} alt='' />
        <div className='web-name'>
          <h1>Social media</h1>
          <h6>Explore the ideas throughout the world</h6>
        </div>
      </div>
      {/* <SignUp /> */}
      <Login />
    </div>
  );
};

const Login = () => {
  return (
    <div className='auth-right'>
      <form action='' className='info-form auth-form'>
        <h2>Login</h2>
        <div>
          <input
            type='text'
            placeholder='Username'
            className='info-input'
            name='username'
          />
        </div>
        <div>
          <input
            type='text'
            placeholder='password'
            className='info-input'
            name='password'
          />
        </div>

        <div>
          <span style={{ fontSize: '12px' }}>
            Don't have an account Sign Up
          </span>

          <button className='btn info-button' type='submit'>
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

const SignUp = () => {
  return (
    <div className='auth-right'>
      <form action='' className='info-form auth-form'>
        <h3>Sign Up</h3>
        <div>
          <input
            type='text'
            placeholder='First Name'
            className='info-input'
            name='firstname'
          />
          <input
            type='text'
            placeholder='last Name'
            className='info-input'
            name='lastname'
          />
        </div>
        <div>
          <input
            type='text'
            className='info-input'
            name='username'
            placeholder='username'
          />
        </div>
        <div>
          <input
            type='password'
            className='info-input'
            name='password'
            placeholder='password'
          />

          <input
            type='text'
            className='info-input'
            name='confirmpassword'
            placeholder='confirm password'
          />
        </div>

        <div>
          <span style={{ fontSize: '12px' }}>
            Already have an account. LOGIN!
          </span>
        </div>
        <button className='btn info-button' type='submit'>
          Signup
        </button>
      </form>
    </div>
  );
};

export default Auth;
