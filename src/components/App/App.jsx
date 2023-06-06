import { Profile } from 'components/Profile/Profile';
import { Statistics } from 'components/Statistics/Statistics';
import { FriendList } from 'components/FriendList/FriendList';
import { TransactionHistory } from 'components/TransactionHistory/TransactionHistory';

import user from 'components/data/user.json';
import statistics from 'components/data/data.json';
import friends from 'components/data/friends.json';
import transactions from 'components/data/transactions.json';

import css from './App.module.css'

export const App = () => {
  return (
    <div className={css.container}>
      <Profile user={user} />
      <Statistics title="Upload stats" stats={statistics} />
      <Statistics stats={statistics} />
      <FriendList friends={friends}/>
      <TransactionHistory transactions={transactions}/>
    </div>
  );
};
