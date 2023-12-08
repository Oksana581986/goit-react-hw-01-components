import React from 'react'
import './TransactionHistory.css';

const TransactionHistory = ({ items }) => {
    const tableStyle = {
        width: '90%',
        height: '200',
    };

    return (
      <table style={tableStyle} className="transaction-history">
        <thead>
          <tr className="transaction-name">
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
