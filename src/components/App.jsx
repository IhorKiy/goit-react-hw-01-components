import React from 'react';
import user from './profile/user.json';
import Profile from 'components/profile/Profile';
import Statistics from './statistic/Statistic';
import data from './statistic/data.json';
import FriendList from './friends/Friends';
import friends from './friends/friends1.json';
import FriendListItem from './friends/FriendListItem';
import TransactionHistory from './transaction/TransactionHistory';
import transactions from './transaction/transactions.json';


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
      <Statistics title="Upload stats" stats={data} />
      {/* <Statistics stats={data} /> */}
      <FriendList>
              <FriendListItem friends={friends}        
          />
              </FriendList>
      ,
      <TransactionHistory transactions={transactions} />
    </div>
  );
};
