import React from 'react';
import './followerscard.css';
import { Followers } from '../../data/followerData';

const FollowersCard = () => {
  return (
    <div className='followers-card'>
      <h3>Who Is Following You</h3>
      {Followers.map((follower, id) => {
        return (
          <div key={id} className='all-followers'>
            <div className='followers-left'>
              <img
                src={follower.img}
                className='follower-image'
                alt='followers'
              />
              <div className='follower-name'>
                <span>{follower.name}</span>
                <span>@{follower.userName}</span>
              </div>
            </div>
            <button className='btn'>Follow</button>
          </div>
        );
      })}
    </div>
  );
};

export default FollowersCard;
