import React from 'react';
import './profile.css';
import ProfiLeleft from '../../components/profileleft/ProfileLeft';
import Profilecard from '../../components/profilecard/ProfileCard';
import PostSide from '../../components/postside/PostSide';
import RightSide from '../../components/rightside/RightSide';
const Profile = () => {
  return (
    <div className='profile'>
      <ProfiLeleft />
      <div className='profile-center'>
        <Profilecard />
        <PostSide />
      </div>
      <RightSide />
    </div>
  );
};

export default Profile;
