import React, { useState, useRef } from 'react';
import './postshare.css';
import ProfileImage from '../../img/profileImg.jpg';
import {
  UilScenery,
  UilPlayCircle,
  UilLocationPoint,
  UilSchedule,
  UilTimes
} from '@iconscout/react-unicons';

const PostShare = () => {
  const [image, setImage] = useState(null);
  const imageRef = useRef();

  const imageOnChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      let img = e.target.files[0];
      setImage({
        image: URL.createObjectURL(img)
      });
    }
  };
  return (
    <div className='post-share'>
      <img src={ProfileImage} alt='' />
      <div className='input-icon'>
        <input type='text' placeholder="What's Happening?" />
        <div className='post-option'>
          <div
            className='option'
            style={{ color: 'var(--photo)' }}
            onClick={() => imageRef.current.click()}>
            <UilScenery />
            <span>Photo</span>
          </div>
          <div className='option' style={{ color: 'var(--video)' }}>
            <UilPlayCircle />
            <span>Video</span>
          </div>
          <div className='option' style={{ color: 'var(--location)' }}>
            <UilLocationPoint />
            <span>Location</span>
          </div>
          <div className='option' style={{ color: 'var(--schedule)' }}>
            <UilSchedule />
            <span>Schedule</span>
          </div>
          <button className='btn'>Share</button>
          <div style={{ display: 'none' }}>
            <input
              type='file'
              ref={imageRef}
              onChange={imageOnChange}
              name='myImage'
            />
          </div>
        </div>

        {image && (
          <div className='preview-image'>
            <UilTimes onClick={() => setImage(null)} />
            <img src={image.image} alt='' />
          </div>
        )}
      </div>
    </div>
  );
};

export default PostShare;
