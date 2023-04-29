import React from 'react';
import user from 'components/Profile/user.json';
import Profile from 'components/Profile/Profile';
import Statistics from './Statistic/Statistic';
import data from './Statistic/data.json';
import FriendList from './Friends/Friends';
import friends from './Friends/friends1.json';
import TransactionHistory from './Transaction/TransactionHistory';
import transactions from './Transaction/transactions.json';


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
      <FriendList friends={friends} />,
      <TransactionHistory transactions={transactions} />
    </div>
  );
};
