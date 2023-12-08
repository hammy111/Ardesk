import React from 'react';
import "./Item.css"

const Items = ({ item }) => {
  return (
    <div className="container">
      <div className="block">
        <div className="block-title">
          <img src={item.icon} alt={item.title} />
          <div className="title-sub">
            <span className='subtitle'>{item.subTitle}</span>
            <h3 className='item-title'>{item.title}</h3>
          </div>
        </div>
        <h5 className='items-description'>{item.description}</h5>
        <span className='item-info'>{item.info}</span>
      </div>
    </div>
  );
};

export default Items;
