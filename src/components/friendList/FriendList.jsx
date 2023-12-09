import React from 'react';
import css from './FriendList.module.css';
import { FriendListItem } from './FriendListItem';


const FriendList = ({ friends }) => {
  return (
    <ul className={css.list}>
      {friends.map(({ id, ...friend }) => (
        <FriendListItem key={id} {...friend} />
      ))}
    </ul>
  );
};

export { FriendList };