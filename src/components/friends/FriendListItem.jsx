import React from 'react';
import PropTypes from 'prop-types';
import css from 'components/friends/FriendsListItem.module.css';

function FriendListItem({ friends }) {
  return (
    <div>
      {friends.map(friend => (
        <li className={`${css.item} ${friend.isOnline ? css.online : css.offline}`} key={friend.id}>
          <span></span>
          <img
            className={css.avatar}
            src={friend.avatar}
            alt="User avatar"
            width="48"
          />
          <p className={css.name}>{friend.name}</p>
        </li>
      ))}
    </div>
  );
}

FriendListItem.propTypes = {
  friends: PropTypes.array

};

export default FriendListItem;
