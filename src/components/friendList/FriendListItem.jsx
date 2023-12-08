import React from 'react';
import css from './FriendList.module.css';

const FriendListItem = ({ avatar, name, isOnline }) => {
    return (
      <li className={css.item}>
        <span className={`status ${isOnline ? 'online' : 'offline'}`}></span>
        <img className={css.avatar} src={avatar} alt={`User avatar ${name}`} width="48" />
        <p className={css.name}>{name}</p>
      </li>
    );
  };
  
export { FriendListItem };
