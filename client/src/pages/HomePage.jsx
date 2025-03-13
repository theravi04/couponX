import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="max-w-5xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4 text-white">
          Welcome to CouponHub
        </h1>
        <p className="text-xl text-gray-300">
          Manage and claim your discount coupons with ease.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-16">
        <Link to="/claim" className="block">
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:bg-gray-700 transition-colors duration-300 h-full">
            <h2 className="text-2xl font-semibold mb-3 text-purple-400">
              Claim a Coupon
            </h2>
            <p className="text-gray-300">Have a coupon code? Claim it here.</p>
          </div>
        </Link>

        <Link to="/admin" className="block">
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:bg-gray-700 transition-colors duration-300 h-full">
            <h2 className="text-2xl font-semibold mb-3 text-purple-400">
              Admin Panel
            </h2>
            <p className="text-gray-300">Add and manage coupons easily.</p>
          </div>
        </Link>
      </div>

      <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold mb-8 text-center text-white">
          How It Works
        </h2>
        <ol className="space-y-5">
          <li className="flex items-start">
            <div className="flex-shrink-0 bg-purple-500 text-white rounded-full w-10 h-10 flex items-center justify-center mr-4 font-bold">
              1
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2 text-white">
                Create Coupons (Only Admins can add!)
              </h3>
              <p className="text-gray-300">
                Add new coupon codes for your customers. Our system automatically distributes them sequentially to ensure even and fair allocation.
              </p>
            </div>
          </li>
          <li className="flex items-start">
            <div className="flex-shrink-0 bg-purple-500 text-white rounded-full w-10 h-10 flex items-center justify-center mr-4 font-bold">
              2
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2 text-white">
                Share Coupons
              </h3>
              <p className="text-gray-300">
                Share your coupon codes with your customers. No login required — customers can claim as guests with our hassle-free system.
              </p>
            </div>
          </li>
          <li className="flex items-start">
            <div className="flex-shrink-0 bg-purple-500 text-white rounded-full w-10 h-10 flex items-center justify-center mr-4 font-bold">
              3
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2 text-white">
                Claim Coupons
              </h3>
              <p className="text-gray-300">
                Customers can claim coupons to get discounts. Our anti-abuse system uses IP and cookie tracking to ensure fair distribution, with a one-hour waiting period between claims.
              </p>
            </div>
          </li>
        </ol>
      </div>
    </div>
  );
};

export default HomePage;