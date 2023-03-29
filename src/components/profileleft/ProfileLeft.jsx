import React from 'react';
import LogoSearch from '../../components/logosearch/LogoSearch';
import InfoCard from '../../components/infocard/InfoCard';
import FollowersCard from '../../components/followerscard/FollowersCard';

const ProfileLeft = () => {
  return (
    <div className='profile-side'>
      <LogoSearch />
      <InfoCard />
      <FollowersCard />
    </div>
  );
};

export default ProfileLeft;
