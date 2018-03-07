import React from 'react';
import {Link} from 'react-router-dom';

export default({item}) => {
  const {image_url} = item;

  return (
    <div
      className='item_container'
      style={{
      backgroundImage: `url(${image_url})`
    }}>
      <Link to={`/items/${item.id}`}>
        <div
          className='item_container'
          style={{
          backgroundColor: `rgba(255,255,255,0.01)`
        }}></div>
      </Link>
    </div>
  );
}