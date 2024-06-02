import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

const FTransaction = () => {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { inforUser } = useSelector((state) => state.userReducer);

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const response = await fetch(
          `http://localhost:8080/farmer/transaction/${inforUser.farmerID}`
        );
        const data = await response.json();
        console.log('Fetched data:', data); // Log the response data

        if (data.message === 'successfully' && Array.isArray(data.content)) {
          setTransactions(data.content);
        } else {
          console.error('Unexpected data format:', data);
          setTransactions([]);
        }
        setLoading(false);
      } catch (error) {
        console.error('Error fetching transactions:', error);
        setError(error);
        setLoading(false);
      }
    };

    fetchTransactions();
  }, [inforUser.farmerID]);
  

  const tableStyle = {
    width: '100%',
    borderCollapse: 'collapse',
    margin: '15px', // Center the table itself
  };

  const thTdStyle = {
    color: 'black',
    border: '1px solid black',
    padding: '8px',
  };

  const thStyle = {
    ...thTdStyle,
    backgroundColor: '#f2f2f2',
    textAlign: 'left',
  };

  const imgStyle = {
    width: '80px',
    height: '80px'
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (transactions.length === 0) {
    return <div>No transactions found</div>;
  }

  return (
    <div>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={thStyle}>Order ID</th>
            <th style={thStyle}>Transaction ID</th>
            <th style={thStyle}>Supplier Name</th>
            <th style={thStyle}>Product Name</th>
            <th style={thStyle}>Product Image</th>
            <th style={thStyle}>Quantity</th>
            <th style={thStyle}>Price</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction, index) => {
            console.log('Transaction:', transaction); // Log each transaction

            return (
              <tr key={transaction.transactionID}>
                <td style={thTdStyle}>{transaction.orderID}</td>
                <td style={thTdStyle}>{transaction.transactionID}</td>
                <td style={thTdStyle}>{transaction.supplier.supplierName}</td>
                <td style={thTdStyle}>{transaction.inventoryProduct.productName}</td>
                <td style={thTdStyle}>
                  <img
                    src={transaction.inventoryProduct.image}
                    alt={transaction.inventoryProduct.productName}
                    style={imgStyle}
                  />
                </td>
                <td style={thTdStyle}>{transaction.quantity}</td>
                <td style={thTdStyle}>{transaction.price}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default FTransaction;
