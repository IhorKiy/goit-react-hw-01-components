import React from 'react';
import PropTypes from 'prop-types';
import css from 'components/Friends/FriendsListItem.module.css';

function FriendListItem({ friend }) {
  return (
    <li
      className={`${css.item} ${friend.isOnline ? css.online : css.offline}`}
      key={friend.id}
    >
      <span></span>
      <img
        className={css.avatar}
        src={friend.avatar}
        alt="User avatar"
        width="48"
      />
      <p className={css.name}>{friend.name}</p>
    </li>
  );
}

FriendListItem.propTypes = {
  friend: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }),
};

export default FriendListItem;
