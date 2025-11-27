import React, { useState } from 'react';
import Navbar from '../components/Reusable/Navbar';
import Button from '../components/Reusable/Button';
import Input from '../components/Reusable/Input';

// Mock Component for Seat Selection (Simplified for demo)
const SeatMapGrid = () => {
  // Data Display: Simplified Seat Map
  const seats = ['A1', 'A2', 'B1 (Selected)', 'B2 (Occupied)'];
  return (
    <div className="p-4 bg-gray-900 rounded-lg mb-6">
      <h3 className="text-xl font-semibold mb-3">Select Your Seats (1 Seat Selected)</h3>
      <div className="flex flex-wrap gap-2 text-sm">
        {seats.map((seat, index) => (
          <span 
            key={index} 
            className={`px-3 py-1 rounded-full cursor-pointer 
              ${seat.includes('Selected') ? 'bg-gc-primary text-gc-dark font-bold' : 
               seat.includes('Occupied') ? 'bg-red-900 text-gray-400 line-through' : 
               'bg-gray-700 hover:bg-gray-600'}`
            }
          >
            {seat}
          </span>
        ))}
      </div>
      <div className="mt-4 text-sm text-gray-400">
        Legend: <span className="text-gc-primary">Selected</span>, <span className="text-red-600">Occupied</span>, Available
      </div>
    </div>
  );
};

const BookingPage = () => {
  const [paymentData, setPaymentData] = useState({ card: '', cvv: '' });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(null); // null, 'success', 'error'

  const handleChange = (e) => {
    setPaymentData({ ...paymentData, [e.target.name]: e.target.value });
    if (errors[e.target.name]) setErrors({ ...errors, [e.target.name]: '' });
  };

  const validate = () => {
    let tempErrors = {};
    if (!paymentData.card || paymentData.card.length !== 16) tempErrors.card = "Card number must be 16 digits.";
    if (!paymentData.cvv || paymentData.cvv.length !== 3) tempErrors.cvv = "CVV must be 3 digits.";
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus(null);
    if (validate()) {
      // Simulate successful booking
      setTimeout(() => {
        setStatus('success');
      }, 500);
    } else {
      // Simulate validation error (already handled by Input component)
      setStatus('error'); // Setting status to 'error' to show global message
    }
  };

  return (
    <>
      <Navbar activeLink="My Tickets" />
      <div className="max-w-4xl mx-auto py-10 px-4">
        <h1 className="text-4xl font-bold text-white mb-8">Confirm Your Booking</h1>
        
        {/* Feedback State: Success Message */}
        {status === 'success' && (
          <div className="bg-green-700 p-4 rounded-lg mb-6 text-center">
            <p className="text-xl font-semibold">Booking Successful! Enjoy the show.</p>
            <p className="text-sm">E-ticket sent to your email.</p>
          </div>
        )}
        
        {/* Feedback State: Global Error Message */}
        {status === 'error' && (
             <div className="bg-red-700 p-4 rounded-lg mb-6 text-center">
             <p className="text-xl font-semibold">Payment Failed!</p>
             <p className="text-sm">Please check the fields below and try again.</p>
           </div>
        )}

        <SeatMapGrid />

        <div className="bg-gray-900 p-6 rounded-xl shadow-lg">
          <h2 className="text-2xl font-bold text-white mb-4">Payment Details</h2>
          <form onSubmit={handleSubmit}>
            <Input 
              label="Card Number" 
              id="card" 
              type="text" 
              value={paymentData.card} 
              onChange={handleChange} 
              placeholder="0000 0000 0000 0000"
              error={errors.card}
            />
             <div className="grid grid-cols-2 gap-4">
                <Input label="Expiry Date" id="expiry" type="text" placeholder="MM/YY" />
                <Input 
                  label="CVV" 
                  id="cvv" 
                  type="text" 
                  value={paymentData.cvv} 
                  onChange={handleChange} 
                  placeholder="123"
                  error={errors.cvv}
                />
            </div>
            
            <div className="mt-6">
              <Button type="submit" variant="primary">
                Confirm Booking
              </Button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default BookingPage;