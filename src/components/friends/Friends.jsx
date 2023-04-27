
import React from 'react';
import css from 'components/friends/Friends.module.css'

const FriendList = ( {children}) => {
    return <ul className={css.friendList}>
       {children}
  </ul>;
};



export default FriendList;
