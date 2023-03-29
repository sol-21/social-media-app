import React from 'react';
import './home.css';
import ProfileSide from '../../components/profileside/ProfileSide';
import PostSide from '../../components/postside/PostSide';
import RightSide from '../../components/rightside/RightSide';

const Home = () => {
  return (
    <div className='home'>
      <ProfileSide />
      <PostSide />
      <RightSide />
    </div>
  );
};

export default Home;
