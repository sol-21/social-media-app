import React, { useState } from 'react';
import './infocard.css';
import { UilPen } from '@iconscout/react-unicons';
import ProfileModal from '../profilemodal/ProfileModal';

const InfoCard = () => {
  const [modalOpened, setModalOpened] = useState(false);

  return (
    <div className='info-card'>
      <div className='info-head'>
        <h4>Your Info</h4>
        <div>
          <UilPen
            width='2rem'
            height='1.2rem'
            onClick={() => setModalOpened(true)}
          />
          <ProfileModal
            modalOpened={modalOpened}
            setModalOpened={setModalOpened}
          />
        </div>
      </div>
      <div className='info'>
        <span>
          <b>status</b>
        </span>
        <span>in relationship</span>
      </div>
      <div className='info'>
        <span>
          <b>lives</b>
        </span>
        <span>Ethiopia</span>
      </div>
      <div className='info'>
        <span>
          <b>Works at</b>
        </span>
        <span>Wollo University</span>
      </div>
      <button className='btn btn-width'>Logout</button>
    </div>
  );
};

export default InfoCard;
