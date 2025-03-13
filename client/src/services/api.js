import axios from 'axios';

// Base URL for API requests
const API_BASE_URL = 'https://couponx.onrender.com/api';

// Create axios instance with default config
const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Coupon API methods
export const couponApi = {
  // Get all coupons
  getAllCoupons: () => api.get('/coupons/all'),
  
  // Add new coupon
  addCoupon: (code) => api.post('/coupons/add', { code }),
  
  // Claim a coupon
  claimCoupon: (code) => api.post('/coupons/claim', { code }),
};

export default api;