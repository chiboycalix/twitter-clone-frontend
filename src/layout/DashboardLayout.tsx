import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logout } from '../store/slices/authSlice';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import MainContent from './MainContent';
import { AppDispatch } from '../store/store';

const DashboardLayout: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const dispatch = useDispatch<AppDispatch>();

  const handleLogout = () => {
    dispatch(logout());
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(prev => !prev);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar onMenuClick={toggleMobileMenu} />
      <Sidebar
        isOpen={isMobileMenuOpen}
        onLogout={handleLogout}
      />
      <MainContent />
    </div>
  );
};

export default DashboardLayout;