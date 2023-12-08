import React from 'react';
import './Statistics.css';

const Statistics = ({ title, stats }) => {
  return (
    <section className="statistics">
      {title && <h2 className="stat-title">{title}</h2>}

      <ul className="stat-list">
        {stats.map(({ id, label, percentage }) => (
          <li key={id} className="item"style={{ backgroundColor: generateRandomColor() }}>
            <span className="stat-label">{label}</span>
            <span className="stat-percentage">{percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  )
}


const generateRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };
  
export { Statistics }; 