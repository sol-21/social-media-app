import React from 'react';
import './posts.css';
import Post from '../post/Post';
import { PostsData } from '../../data/postsData';

const Posts = () => {
  return (
    <div className='posts'>
      {PostsData.map((data, id) => {
        return <Post data={data} id={id} />;
      })}
    </div>
  );
};

export default Posts;
