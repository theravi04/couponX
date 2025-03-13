import React, { useState, useEffect } from "react";
import { couponApi } from "../services/api";
import toast from "react-hot-toast";

const ClaimCoupon = () => {
  const [coupons, setCoupons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [code, setCode] = useState("");
  const [claimLoading, setClaimLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [claimedCode, setClaimedCode] = useState("");

  useEffect(() => {
    const fetchCoupons = async () => {
      try {
        setLoading(true);
        const response = await couponApi.getAllCoupons();
        setCoupons(response.data.coupons || []);
        setError(null);
      } catch (err) {
        console.error("Error fetching coupons:", err);
        setError("Failed to load coupons. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchCoupons();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!code.trim()) {
      toast.error("Please enter a coupon code");
      return;
    }

    setClaimLoading(true);
    try {
      const response = await couponApi.claimCoupon(code);
      setClaimedCode(response.data.coupon);
      setSuccess(true);
      toast.success("Coupon claimed successfully!");
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to claim coupon");
    } finally {
      setClaimLoading(false);
      setCode("");
    }
  };

  return (
    <div className="max-w-3xl mx-auto">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-3 text-white">
          Claim Your Coupon
        </h1>
        <p className="text-gray-300">
          Enter your coupon code below to claim your discount. Each code can
          only be used once.
        </p>
      </div>

      <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
        {success ? (
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4 text-green-400">Success!</h3>
            <p className="text-gray-300 mb-4">
              You've successfully claimed the coupon:
            </p>
            <div className="bg-gray-700 p-4 rounded-md mb-6 max-w-xs mx-auto">
              <span className="text-xl font-mono text-white">
                {claimedCode}
              </span>
            </div>
            <button
              onClick={() => setSuccess(false)}
              className="bg-purple-600 hover:bg-purple-700 text-white font-medium py-2 px-6 rounded-md transition-colors duration-300"
            >
              Claim Another
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <h2 className="text-2xl font-semibold mb-6 text-center text-white">
              Claim Your Coupon
            </h2>
            <div className="space-y-2">
              <label htmlFor="claimCode" className="block text-gray-300">
                Enter Coupon Code
              </label>
              <input
                type="text"
                id="claimCode"
                value={code}
                onChange={(e) => setCode(e.target.value)}
                placeholder="COUPON123"
                className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 text-white placeholder-gray-400"
              />
            </div>
            <div className="pt-2">
              <button
                type="submit"
                disabled={claimLoading}
                className="w-full bg-purple-600 hover:bg-purple-700 text-white font-medium py-2 px-4 rounded-md transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {claimLoading ? "Processing..." : "Claim Coupon"}
              </button>
            </div>
          </form>
        )}
      </div>

      <div className="bg-gray-800 p-6 rounded-lg mt-10">
        <h2 className="text-xl font-semibold mb-4 text-white">
          Available Coupons
        </h2>

        {loading ? (
          <div className="text-center py-4">
            <p className="text-gray-400">Loading coupons...</p>
          </div>
        ) : error ? (
          <div className="text-center py-4">
            <p className="text-red-400">{error}</p>
          </div>
        ) : coupons.length === 0 ? (
          <div className="text-center py-4">
            <p className="text-gray-400">No coupons available at this time.</p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full table-auto">
              <thead>
                <tr className="border-b border-gray-700">
                  <th className="py-2 px-4 text-left text-purple-400">Code</th>
                  <th className="py-2 px-4 text-left text-purple-400">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody>
                {coupons.map((coupon, index) => (
                  <tr
                    key={coupon.id || coupon.code || index}
                    className="border-b border-gray-700 hover:bg-gray-700"
                  >
                    <td className="py-3 px-4 text-white font-mono">
                      {coupon.code}
                    </td>
                    <td className="py-3 px-4">
                      <span
                        className={`px-2 py-1 rounded text-xs font-medium ${
                          coupon.claimed === false
                            ? "bg-green-900 text-green-300"
                            : "bg-gray-700 text-gray-400"
                        }`}
                      >
                        {coupon.claimed === false ? "Available" : "Claimed"}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        <p className="text-gray-400 mt-4 text-sm italic">
          Note: You can only claim one coupon per hour.
        </p>
      </div>
    </div>
  );
};

export default ClaimCoupon;
