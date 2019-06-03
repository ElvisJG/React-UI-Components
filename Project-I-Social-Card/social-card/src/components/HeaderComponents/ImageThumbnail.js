import React from 'react';
import './Header.css';

function ImageThumbnail() {
  return (
    <div className='thumbnail'>
      <img
        src='../../lambdalogo.png'
        alt='Lambda School Logo'
        className='image'
      />
    </div>
  );
}

export default ImageThumbnail;
