import React from 'react';
import user from './profile/user.json';
import Profile from './profile/Profile';
import Statistics from './statistic/Statistic';
import data from './statistic/data.json';
import FriendList from './friends/Friends';
import friends from './friends/friends1.json';
import FriendListItem from './friends/FriendListItem';

export const App = () => {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      ,
      <Statistics title="Upload stats" stats={data} />,
      <FriendList>
        {friends.map(friend => (
          <FriendListItem
            key={friend.id}
            isOnline={friend.isOnline}
            avatar={friend.avatar}
            name={friend.name}
          />
        ))}
      </FriendList>
      ,
    </div>
  );
};
