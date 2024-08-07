import React, { useState } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../container/Footer/Footer';
import { FaCreditCard, FaMoneyBillAlt } from 'react-icons/fa';
import { FaCcVisa, FaCcMastercard, FaPaypal, FaCcAmex } from 'react-icons/fa';
import './Payment.css'; // You'll need to create this CSS file for styling

function Payment() {
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [selectedCard, setSelectedCard] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvc, setCvc] = useState('');

  const handlePaymentMethodChange = (method) => {
    setPaymentMethod(method);
    setSelectedCard('');
    setCardNumber('');
    setExpiry('');
    setCvc('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle payment processing here
  };

  return (
    <>
      <Navbar />
      <div className="payment-container">
        <h1>Payment</h1>
        <div className="payment-methods">
          <FaCreditCard
            className={paymentMethod === 'card' ? 'active' : ''}
            onClick={() => handlePaymentMethodChange('card')}
          />
          <FaMoneyBillAlt
            className={paymentMethod === 'cash' ? 'active' : ''}
            onClick={() => handlePaymentMethodChange('cash')}
          />
        </div>
        {paymentMethod === 'card' && (
          <div className="card-payment">
            <h2>Select Card Type:</h2>
            <div className="card-options">
              <FaCcVisa
                className={selectedCard === 'visa' ? 'active visa' : 'visa'}
                onClick={() => setSelectedCard('visa')}
              />
              <FaCcMastercard
                className={selectedCard === 'mastercard' ? 'active mastercard' : 'mastercard'}
                onClick={() => setSelectedCard('mastercard')}
              />
              <FaPaypal
                className={selectedCard === 'paypal' ? 'active paypal' : 'paypal'}
                onClick={() => setSelectedCard('paypal')}
              />
              <FaCcAmex
                className={selectedCard === 'amex' ? 'active amex' : 'amex'}
                onClick={() => setSelectedCard('amex')}
              />
            </div>
            <form onSubmit={handleSubmit} className="payment-form">
              <label htmlFor="cardNumber">Card Number:</label>
              <input
                type="text"
                id="cardNumber"
                value={cardNumber}
                onChange={(e) => setCardNumber(e.target.value)}
                required
              />

              <label htmlFor="expiry">Expiry Date:</label>
              <input
                type="text"
                id="expiry"
                value={expiry}
                onChange={(e) => setExpiry(e.target.value)}
                required
              />

              <label htmlFor="cvc">CVC:</label>
              <input
                type="text"
                id="cvc"
                value={cvc}
                onChange={(e) => setCvc(e.target.value)}
                required
              />

              <button type="submit" className="pay-button">
                Payment
              </button>
            </form>
          </div>
        )}
        {paymentMethod === 'cash' && (
          <div className="cash-payment">
            <h2>Cash On Delivery</h2>
            <p>Please have the exact amount ready for when your order arrives.</p>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
}

export default Payment;
