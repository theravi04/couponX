import React, { useState, useEffect } from 'react';
import { couponApi } from '../services/api';
import toast from 'react-hot-toast';

const AdminPanel = () => {
  const [couponCode, setCouponCode] = useState('');
  const [coupons, setCoupons] = useState([]);
  const [loading, setLoading] = useState(false);
  const [fetching, setFetching] = useState(true);

  // Fetch all coupons
  const fetchCoupons = async () => {
    try {
      setFetching(true);
      const response = await couponApi.getAllCoupons();
      setCoupons(response.data.coupons);
    } catch (error) {
      toast.error('Failed to fetch coupons');
      console.error(error);
    } finally {
      setFetching(false);
    }
  };

  useEffect(() => {
    fetchCoupons();
  }, []);

  const addCoupon = async () => {
    if (!couponCode.trim()) {
      toast.error('Please enter a coupon code');
      return;
    }

    setLoading(true);
    try {
      await couponApi.addCoupon(couponCode.trim());
      toast.success('Coupon added successfully');
      setCouponCode('');
      fetchCoupons(); // Refresh coupon list after adding
    } catch (error) {
      toast.error('Failed to add coupon');
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold text-white mb-6">Admin Panel</h1>
        <p className="text-gray-300 mb-4">Manage your coupon codes from this dashboard.</p>
      </div>

      {/* Add Coupon Section */}
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg mb-8">
        <h2 className="text-xl font-semibold mb-4 text-white">Add New Coupon</h2>
        <div className="space-y-4">
          <input 
            type="text" 
            value={couponCode} 
            onChange={(e) => setCouponCode(e.target.value)} 
            placeholder="Enter coupon code"
            className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 text-white placeholder-gray-400"
          />
          <button 
            onClick={addCoupon} 
            disabled={loading}
            className="w-full bg-purple-600 hover:bg-purple-700 text-white font-medium py-2 px-4 rounded-md transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? 'Adding...' : 'Add New Coupon'}
          </button>
        </div>
      </div>

      {/* Coupon List Section */}
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-semibold mb-4 text-white">Existing Coupons</h2>
        {fetching ? (
          <p className="text-gray-400 text-center">Loading coupons...</p>
        ) : coupons.length === 0 ? (
          <p className="text-gray-400 text-center">No coupons available.</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full table-auto">
              <thead>
                <tr className="border-b border-gray-700">
                  <th className="py-2 px-4 text-left text-purple-400">Code</th>
                  <th className="py-2 px-4 text-left text-purple-400">Status</th>
                </tr>
              </thead>
              <tbody>
                {coupons.map((coupon) => (
                  <tr key={coupon.id || coupon.code} className="border-b border-gray-700 hover:bg-gray-700">
                    <td className="py-3 px-4 text-white font-mono">{coupon.code}</td>
                    <td className="py-3 px-4">
                      <span className={`px-2 py-1 rounded text-xs font-medium ${coupon.claimed ? 'bg-gray-700 text-gray-400' : 'bg-green-900 text-green-300'}`}>
                        {coupon.claimed ? 'Claimed' : 'Available'}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminPanel;
