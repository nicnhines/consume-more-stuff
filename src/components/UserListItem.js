import React from 'react';
import { Link } from 'react-router-dom';

const UserListItem = ({ item, title, user_id }) => {
  console.log(`nnnn`, item)
  return (
    <div className="item-list-container">
    <div className="item-list">
      <img src = {item.image_url} />
    </div>
    </div>
  )
}


 export default UserListItem;