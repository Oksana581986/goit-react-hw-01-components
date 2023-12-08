import React from 'react'
import css from './TransactionHistory.module.css';
import cn from 'classnames';

const TransactionHistory = ({ items }) => {
    const tableStyle = {
        width: '85%',
        height: '200',
    };

    return (
      <table style={tableStyle} className={cn(css.history)}>
        <thead>
          <tr className={css.name}>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>
  
        <tbody>
          {items.map(({ id, type, amount, currency }) => (
            <tr key={id}>
              <td>{type}</td>
              <td>{amount}</td>
              <td>{currency}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };

export { TransactionHistory };
