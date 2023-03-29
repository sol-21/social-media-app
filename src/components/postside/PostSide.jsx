import React from 'react';
import './postside.css';
import PostShare from '../postshare/PostShare';
import Posts from '../posts/Posts';

const PostSide = () => {
  return (
    <div className='post-side'>
      <PostShare />
      <Posts />
    </div>
  );
};

export default PostSide;
