import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div>
      <h1>Welcome to CouponHub</h1>
      <p>Manage and claim your discount coupons with ease.</p>

      <div>
        <Link to="/claim">
          <div>
            <h2>Claim a Coupon</h2>
            <p>Have a coupon code? Claim it here.</p>
          </div>
        </Link>

        <Link to="/admin">
          <div>
            <h2>Admin Panel</h2>
            <p>Add and manage coupons easily.</p>
          </div>
        </Link>
      </div>

      <div>
        <h2>How It Works</h2>
        <ol>
          <li>
            <h3>Create Coupons</h3>
            <p>Add new coupon codes for your customers.</p>
          </li>
          <li>
            <h3>Share Coupons</h3>
            <p>Share your coupon codes with your customers.</p>
          </li>
          <li>
            <h3>Claim Coupons</h3>
            <p>Customers can claim coupons to get discounts.</p>
          </li>
        </ol>
      </div>
    </div>
  );
};

export default HomePage;
