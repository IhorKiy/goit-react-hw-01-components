import React from 'react';
import PropTypes from 'prop-types';

const FriendListItem = ({ isOnline, avatar, name }) => {
  return (
    <div>
      <li className="item">
        <span>{isOnline}</span>
        <img className="avatar" src={avatar} alt="User avatar" width="48" />
        <p className="name">{name}</p>
      </li>
    </div>
  );
};

FriendListItem.propTypes = {
  avatar:PropTypes.string,
  isOnline: PropTypes.bool,
  name: PropTypes.string,


};

export default FriendListItem;
