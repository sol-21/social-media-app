import React from 'react';
import './profilecard.css';
import Avatar from '../../img/profileImg.jpg';
import BgImage from '../../img/cover.jpg';

const ProfileCard = () => {
  const profilePage = true;
  return (
    <div className='profile-card'>
      <div className='profile-image'>
        <img src={BgImage} alt='profile background' className='bg-image' />
        <img src={Avatar} alt='profile' className='avatar' />
      </div>
      <div className='profile-name'>
        <span>Zendaya Mj</span>
        <span>javascript Developer</span>
      </div>
      <div className='follow-status'>
        <div className='followers'>
          <span>1M</span>
          <span>Followers</span>
        </div>
        <div className='following'>
          <span>1</span>
          <span>Following</span>
        </div>

        {profilePage && (
          <>
            <div className='vl'></div>
            <div className='follow'>
              <span>3</span>
              <span>posts</span>
            </div>
          </>
        )}
      </div>

      <div className='card-footer'>
        {profilePage ? '' : <span>My Profile</span>}
      </div>
    </div>
  );
};

export default ProfileCard;
