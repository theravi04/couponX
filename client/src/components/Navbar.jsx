import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-gray-900 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "px-3 py-2 rounded-md text-sm font-medium bg-gray-800 text-white"
                    : "px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-800 hover:text-white transition-colors"
                }
              >
                CouponX
              </NavLink>
            </div>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex md:items-center md:space-x-4">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "px-3 py-2 rounded-md text-sm font-medium bg-gray-800 text-white"
                  : "px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-800 hover:text-white transition-colors"
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/claim"
              className={({ isActive }) =>
                isActive
                  ? "px-3 py-2 rounded-md text-sm font-medium bg-gray-800 text-white"
                  : "px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-800 hover:text-white transition-colors"
              }
            >
              Claim Coupon
            </NavLink>
            <NavLink
              to="/admin"
              className={({ isActive }) =>
                isActive
                  ? "px-3 py-2 rounded-md text-sm font-medium bg-gray-800 text-white"
                  : "px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-800 hover:text-white transition-colors"
              }
            >
              Admin
            </NavLink>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isMenuOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-900">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "block px-3 py-2 rounded-md text-base font-medium bg-gray-800 text-white"
                  : "block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-800 hover:text-white transition-colors"
              }
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </NavLink>
            <NavLink
              to="/claim"
              className={({ isActive }) =>
                isActive
                  ? "block px-3 py-2 rounded-md text-base font-medium bg-gray-800 text-white"
                  : "block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-800 hover:text-white transition-colors"
              }
              onClick={() => setIsMenuOpen(false)}
            >
              Claim Coupon
            </NavLink>
            <NavLink
              to="/admin"
              className={({ isActive }) =>
                isActive
                  ? "block px-3 py-2 rounded-md text-base font-medium bg-gray-800 text-white"
                  : "block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-800 hover:text-white transition-colors"
              }
              onClick={() => setIsMenuOpen(false)}
            >
              Admin
            </NavLink>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
