import React, { useState } from 'react';
import toast from 'react-hot-toast';
import axios from 'axios';

const CouponForm = ({ refreshCoupons }) => {
  const [code, setCode] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!code.trim()) {
      toast.error('Please enter a coupon code');
      return;
    }
    
    setLoading(true);
    try {
      await axios.post('/api/coupons/add', { code: code.trim() });
      toast.success('Coupon added successfully!');
      setCode('');
      if (refreshCoupons) refreshCoupons();
    } catch (error) {
      toast.error(error.response?.data?.message || 'Failed to add coupon');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add New Coupon</h2>
      <div>
        <label htmlFor="code">Coupon Code</label>
        <input
          type="text"
          id="code"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          placeholder="Enter coupon code"
        />
      </div>
      <button type="submit" disabled={loading}>
        {loading ? 'Adding...' : 'Add Coupon'}
      </button>
    </form>
  );
};

export default CouponForm;
