import React from 'react';
import './logosearch.css';
import Logo from '../../img/logo.png';
import { UilSearch } from '@iconscout/react-unicons';

const LogoSearch = () => {
  return (
    <div className='logo-search'>
      <img src={Logo} alt='logo' />
      <div className='search'>
        <input type='text' placeholder='#Search' />
        <div className='search-icon'>
          <UilSearch />
        </div>
      </div>
    </div>
  );
};

export default LogoSearch;
