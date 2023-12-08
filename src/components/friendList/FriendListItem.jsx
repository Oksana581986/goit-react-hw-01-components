import React from 'react';
import './FriendList.css';

const FriendListItem = ({ avatar, name, isOnline }) => {
    return (
      <li className="friend-item">
        <span className={`status ${isOnline ? 'online' : 'offline'}`}></span>
        <img className="friend-avatar" src={avatar} alt={`User avatar ${name}`} width="48" />
        <p className="friend-name">{name}</p>
      </li>
    );
  };
  
export { FriendListItem };
