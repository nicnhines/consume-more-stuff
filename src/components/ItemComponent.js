import React from 'react';

const itemComponent = ({ singleItem, editItem, isEditing }) => {
  return (

    <div className="single-item">
    {!isEditing &&
    <div>
      <div className="single-item-title"> Title: { singleItem.title }</div>
      <div className="single-item-description"> Description: { singleItem.description }</div>
      <div className="single-item-price"> Price: { singleItem.price }</div>
      <div className="single-item-condition"> Condition: { singleItem.condition }</div>
      <div className="single-item-category"> Category: { singleItem.category }</div>
      <div className="single-item-status"> Status: { singleItem.status }</div>
      <div className="single-item-image"> Image: { singleItem.image_url }</div>
      <div className="edit-item">
     <input type="submit" value="EDIT" onClick={editItem} />
     </div>
    </div>
    }  
    </div>
  )
}
export default itemComponent;



