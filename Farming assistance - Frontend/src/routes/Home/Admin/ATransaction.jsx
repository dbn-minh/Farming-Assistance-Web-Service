import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ATransaction = () => {
  const [transactions, setTransactions] = useState([]);
  const [selectedTransaction, setSelectedTransaction] = useState(null);
  const [transactionDetails, setTransactionDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [detailsVisible, setDetailsVisible] = useState(false);

  useEffect(() => {
    // Fetch transactions data
    axios.get('http://localhost:8080/admin/transaction')
      .then(response => {
        if (response.data.message === "Success") {
          setTransactions(response.data.content);
        } else {
          throw new Error('Failed to fetch transactions');
        }
      })
      .catch(error => {
        console.error('There was an error fetching the transactions!', error);
        setError('Failed to fetch transactions.');
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const handleSeeMore = (transactionId) => {
    if (selectedTransaction === transactionId && detailsVisible) {
      setDetailsVisible(false);
      setTransactionDetails(null);
      setSelectedTransaction(null);
    } else {
      // Fetch transaction details data
      axios.get(`http://localhost:8080/admin/order/${transactionId}`)
        .then(response => {
          if (response.data.message === "Success") {
            setSelectedTransaction(transactionId);
            setTransactionDetails(response.data.content);
            setDetailsVisible(true);
          } else {
            throw new Error('Failed to fetch transaction details');
          }
        })
        .catch(error => {
          console.error('There was an error fetching the transaction details!', error);
          setError('Failed to fetch transaction details.');
        });
    }
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  const tableStyle = {
    width: 'auto',
    borderCollapse: 'collapse',
  } 

  const thStyle = {
    width: 'auto',
    color: '#FFF',
    textAlign: 'start',
    background: '#63B6BD'
  }

    const tdStyle = {
      color: '#000',
  }

  const innerBorderStyle = {
    borderBottom: '1.5px solid #63B6BD',
    //borderLeft: '1.5px solid #63B6BD',
  }

  return (
    <div className='ml-[20px]' style={{ display: 'flex' }}>
      <div>
        <h3 style={{ fontSize: '25px', color: '#000'}}><strong>Welcome to Sprout Farming</strong></h3>
        <p style={{ fontSize: '20px', color: '#000'}}>Order List</p>
        <table style={tableStyle}>
          <thead>
            <tr>
              <th style={{ ...thStyle }}>Transaction ID</th>
              <th style={{ ...thStyle }}>Total Price</th>
              <th style={{ ...thStyle }}></th>
            </tr>
          </thead>
          <tbody>
            {transactions.map(transaction => (
              <tr key={transaction.transactionID}>
                <td style={{ ...tdStyle, ...innerBorderStyle, width: '150px' }}>{transaction.transactionID}</td>
                <td style={{ ...tdStyle, ...innerBorderStyle, width: '100px' }}>{transaction.totalPrice}</td>
                <td style={{ ...tdStyle, ...innerBorderStyle, width: '120px' }}>
                  <button onClick={() => handleSeeMore(transaction.transactionID)}>
                    {selectedTransaction === transaction.transactionID && detailsVisible ? 'Hide Details' : 'See More'}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {detailsVisible && transactionDetails && selectedTransaction && (
        <div className='mt-[90px] ml-[20px]' style={{ flex: 2, }}>
          <h2 style={{ fontSize: '20px', color: '#000'}}><strong>Transaction Details for ID: {selectedTransaction}</strong></h2>
          <p style={{ color: '#000'}}><strong>Supplier Name:</strong> {transactions.find(t => t.transactionID === selectedTransaction).supplier.supplierName}</p>
          <p style={{ color: '#000'}}><strong>Phone:</strong> {transactions.find(t => t.transactionID === selectedTransaction).supplier.phone}</p>
          <p style={{ color: '#000'}}><strong>Email:</strong> {transactions.find(t => t.transactionID === selectedTransaction).supplier.email}</p>
          <h3 style={{ fontSize: '25px', color: '#000'}}><strong>Product List</strong></h3>
          <table border="1">
            <thead>
              <tr>
                <th style={{ ...thStyle }}>Order ID</th>
                <th style={{ ...thStyle }}>Product Name</th>
                <th style={{ ...thStyle }}>Supplier Name</th>
                <th style={{ ...thStyle }}>Farmer Name</th>
                <th style={{ ...thStyle }}>Price</th>
                <th style={{ ...thStyle }}>Quantity</th>
              </tr>
            </thead>
            <tbody>
              {transactionDetails.map(product => (
                <tr key={product.orderID}>
                  <td style={{ ...tdStyle, ...innerBorderStyle, width: '150px' }}>{product.orderID}</td>
                  <td style={{ ...tdStyle, ...innerBorderStyle, width: '150px' }}>{product.inventoryProduct.productName}</td>
                  <td style={{ ...tdStyle, ...innerBorderStyle, width: '150px' }}>{product.supplier.supplierName}</td>
                  <td style={{ ...tdStyle, ...innerBorderStyle, width: '150px' }}>{product.farmer.farmerName}</td>
                  <td style={{ ...tdStyle, ...innerBorderStyle, width: '100px' }}>{product.price}</td>
                  <td style={{ ...tdStyle, ...innerBorderStyle, width: '100px' }}>{product.quantity}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default ATransaction;