import React, { useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';

const ClaimForm = () => {
  const [code, setCode] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [claimedCode, setClaimedCode] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!code.trim()) {
      toast.error('Please enter a coupon code');
      return;
    }

    setLoading(true);
    try {
      const response = await axios.post('/api/coupons/claim', { code: code.trim() });
      setClaimedCode(response.data.coupon);
      setSuccess(true);
      toast.success('Coupon claimed successfully!');
    } catch (error) {
      toast.error(error.response?.data?.message || 'Failed to claim coupon');
    } finally {
      setLoading(false);
      setCode('');
    }
  };

  return (
    <div>
      {success ? (
        <div>
          <h3>Success!</h3>
          <p>You've successfully claimed the coupon:</p>
          <div>
            <span>{claimedCode}</span>
          </div>
          <button onClick={() => setSuccess(false)}>Claim Another</button>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <h2>Claim Your Coupon</h2>
          <div>
            <label htmlFor="claimCode">Enter Coupon Code</label>
            <input
              type="text"
              id="claimCode"
              value={code}
              onChange={(e) => setCode(e.target.value)}
              placeholder="COUPON123"
            />
          </div>
          <button type="submit" disabled={loading}>
            {loading ? 'Processing...' : 'Claim Coupon'}
          </button>
        </form>
      )}
    </div>
  );
};

export default ClaimForm;