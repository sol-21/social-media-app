import React from 'react';
import './post.css';
import Comment from '../../img/comment.png';
import Share from '../../img/share.png';
import Heart from '../../img/like.png';
import NotLike from '../../img/notlike.png';

const Post = ({ data, id }) => {
  return (
    <div className='post' key={id}>
      <img src={data.img} alt='' />

      <div className='post-reaction'>
        <img src={data.liked ? Heart : NotLike} alt='' />
        <img src={Comment} alt='' />
        <img src={Share} alt='' />
      </div>

      <div className='details'>
        <span style={{ color: 'var(--gray)', fontSize: '12px' }}>
          {data.likes}
        </span>
        <span>
          <span className='bold-name'>{data.name}</span>
          {data.desc}
        </span>
      </div>
    </div>
  );
};

export default Post;
