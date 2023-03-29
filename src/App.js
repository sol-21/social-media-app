import './App.css';
import Home from './pages/home/Home';
import React from 'react';
import Profile from './pages/profile/Profile';
import Auth from './pages/auth/Auth';

const App = () => {
  return (
    <div className='app'>
      <div className='blur right'></div>
      <div className='blur left'></div>
      {/* <Home /> */}
      <Profile />
      {/* <Auth /> */}
    </div>
  );
};

export default App;

