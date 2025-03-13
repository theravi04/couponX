import React from 'react';
import ClaimForm from '../components/ClaimForm';

const ClaimCoupon = () => {
  return (
    <div>
      <div>
        <h1>Claim Your Coupon</h1>
        <p>Enter your coupon code below to claim your discount. Each code can only be used once.</p>
      </div>
      
      <ClaimForm />
      
      <div>
        <h2>Important Notes:</h2>
        <ul>
          <li>
            <span>✔</span> Each coupon code can only be claimed once.
          </li>
          <li>
            <span>✔</span> Coupon codes are case-sensitive.
          </li>
          <li>
            <span>✔</span> The system has measures in place to prevent abuse.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ClaimCoupon;