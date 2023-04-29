import React from 'react';
import user from 'components/Profile/user.json';
import Profile from 'components/Profile/Profile';
import Statistics from 'components/Statistic/Statistic';
import data from 'components/Statistic/data.json';
import FriendList from 'components/Friends/Friends';
import friends from 'components/Friends/friends1.json';
import TransactionHistory from 'components/Transaction/TransactionHistory';
import transactions from 'components/Transaction/transactions.json';




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
