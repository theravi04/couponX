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
  getAllCoupons: () => api.get('/coupons/all'),

  addCoupon: (code) => api.post('/coupons/add', { code }),

  claimCoupon: (code, ip) => api.post('/coupons/claim', { code, ip }), // Send IP along with coupon code
};


export default api;