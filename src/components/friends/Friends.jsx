// import PropTypes from "prop-types";
import React from 'react';

const FriendList = ( {children}) => {
    return <ul className="friend-list">
       {children}
  </ul>;
};

export default FriendList;
