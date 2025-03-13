import React, { useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';

const AdminPanel = () => {
  const [couponCode, setCouponCode] = useState('');

  const addCoupon = async () => {
    try {
      await axios.post('/api/coupons/add', { code: couponCode });
      toast.success('Coupon added successfully');
      setCouponCode('');
    } catch (error) {
      toast.error('Failed to add coupon');
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Admin Panel</h1>
      <div>
        <input 
          type="text" 
          value={couponCode} 
          onChange={(e) => setCouponCode(e.target.value)} 
          placeholder="Enter coupon code"
        />
        <button onClick={addCoupon}>Add Coupon</button>
      </div>
    </div>
  );
};

export default AdminPanel;