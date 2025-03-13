import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import ClaimCoupon from './pages/ClaimCoupon';
import AdminPanel from './pages/AdminPanel';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-900 text-white">
        <Navbar />
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/claim" element={<ClaimCoupon />} />
            <Route path="/admin" element={<AdminPanel />} />
          </Routes>
        </main>
        <Toaster 
          position="top-right" 
          toastOptions={{
            style: {
              background: '#1f2937',
              color: '#fff',
            },
          }}
        />
      </div>
    </Router>
  );
}

export default App;