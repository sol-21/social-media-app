import React from 'react';
import './rightside.css';
import TrendCard from '../trendcard/TrendCard';
import Noti from '../../img/noti.png';
import Home from '../../img/home.png';
import Comment from '../../img/comment.png';
import { UilSetting } from '@iconscout/react-unicons';
const RightSide = () => {
  return (
    <div className='right-side'>
      <div className='nav-icons'>
        <img src={Home} alt='' />
        <UilSetting />
        <img src={Noti} alt='' />
        <img src={Comment} alt='' />
      </div>

      <TrendCard />
    </div>
  );
};

export default RightSide;
