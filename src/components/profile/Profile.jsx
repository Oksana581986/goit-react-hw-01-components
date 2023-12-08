import React from 'react';
import './Profile.css';

const Profile = ({ username, tag, location, avatar, stats }) => {
    return (
        <div className="profile">
        <div className="description">
          <img
            src={avatar}
            alt="Jacques Gluke"
            className="avatar"
          />
          <p className="name">{username}</p>
          <p className="tag">@{tag}</p>
          <p className="location">{location}</p>
        </div>
      
        <ul className="stats">
          <li className="stats-item">
            <span className="stats-label">Followers</span>
            <span className="stats-quantity">{stats.followers}</span>
          </li>
          <li className="stats-item">
            <span className="stats-label">Views</span>
            <span className="stats-quantity">{stats.views}</span>
          </li>
          <li className="stats-item">
            <span className="stats-label">Likes</span>
            <span className="stats-quantity">{stats.likes}</span>
          </li>
        </ul>
      </div>
      );
    }

export { Profile };