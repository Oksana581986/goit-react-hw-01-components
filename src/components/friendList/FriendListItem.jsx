import React from 'react';
import css from './FriendList.module.css';
import PropTypes from 'prop-types';


const FriendListItem = ({ avatar, name, isOnline }) => {
    return (
      <li className={css.item}>
        <span className={css.status} style={{backgroundColor: isOnline ? 'green' : 'red', }}></span>
        <img className={css.avatar} src={avatar} alt={`User avatar ${name}`} width="48" />
        <p className={css.name}>{name}</p>
      </li>
    );
  }

  FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
  };
  

export { FriendListItem };