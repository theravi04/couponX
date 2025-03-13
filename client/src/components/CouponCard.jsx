import React from 'react';

const CouponCard = ({ coupon }) => {
  return (
    <div>
      <div>
        <h3>{coupon.code}</h3>
        <span>
          {coupon.claimed ? 'Claimed' : 'Available'}
        </span>
      </div>
    </div>
  );
};

export default CouponCard;
