import React from 'react';

export default ({ item }) => {
  const { image_url } = item;

  return (
    <div className='item_container'
      style={{ backgroundImage: `url(${image_url})` }}>
    </div>
  );
}