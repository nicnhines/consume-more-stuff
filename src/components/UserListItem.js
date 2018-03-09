import React from 'react';
import { Link } from 'react-router-dom';

const UserListItem = ({ id, item, title,status, user_id }) => {
  
  return (
    <div className="item-list-container">
    <Link to={`/items/${item.id}`}>
        <img  className="img_detail" src = {item.image_url} alt="sorry" />
        <div className="item_detail">       
          <div className="item_title">
            {item.title}
          </div>
        </div>
        </Link>
      </div>
  )
}


 export default UserListItem;