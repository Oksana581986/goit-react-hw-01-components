import React from 'react';
import './FriendList.css';
import { FriendListItem } from './FriendListItem';


const FriendList = ({ friends}) => {
  return (
    <ul className="friend-list">
      {friends.map(({ id, ...friend }) => (
        <FriendListItem key={id} {...friend} />
      ))}
    </ul>
  );
};

export { FriendList };