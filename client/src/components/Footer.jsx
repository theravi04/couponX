import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div>
        <div>
          <h3>CouponHub</h3>
          <p>Manage your coupons efficiently.</p>
        </div>
        <div>
          &copy; {new Date().getFullYear()} CouponHub. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
