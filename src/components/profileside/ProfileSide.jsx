import React from 'react';
import './profileside.css';
import LogoSearch from '../logosearch/LogoSearch';
import ProfileCard from '../profilecard/ProfileCard';
import FollowersCard from '../followerscard/FollowersCard';

const ProfileSide = () => {
  return (
    <div className='profile-side'>
      <LogoSearch />
      <ProfileCard />
      <FollowersCard />
    </div>
  );
};

export default ProfileSide;
