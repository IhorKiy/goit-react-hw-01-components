import React from 'react';
import user from 'components/profile/user.json';
import Profile from 'components/profile/Profile';
import Statistics from 'components/statistic/Statistic';
import data from 'components/statistic/data.json';
import FriendList from 'components/friends/Friends';
import friends from 'components/friends/friends1.json';
import TransactionHistory from 'components/transaction/TransactionHistory';
import transactions from 'components/transaction/transactions.json';



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
