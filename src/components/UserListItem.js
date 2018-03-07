import React from 'react';
import { Link } from 'react-router-dom';

const UserListItem = ({ item, title, user_id }) => {
  return (
    <div className="item-list-container">
      <img src = {item.image_url} />
    </div>
  )
}


 export default UserListItem;