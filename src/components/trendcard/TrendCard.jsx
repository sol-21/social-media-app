import React from 'react';
import './trendcard.css';
import { TrendData } from '../../data/trendData';

const TrendCard = () => {
  return (
    <div className='trend-card'>
      <h3>Trends For You</h3>

      {TrendData.map((trend, id) => {
        return (
          <div className='trend' key={id}>
            <span>#{trend.name}</span>
            <span>{trend.shares}K Shares</span>
          </div>
        );
      })}

      <button className='btn button'>Share</button>
    </div>
  );
};

export default TrendCard;
