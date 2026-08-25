import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaHome, FaHeart, FaSearch, FaCog, FaMusic, FaClock } from 'react-icons/fa';
import { useFavoritesStore } from '../stores/favoritesStore';
import { motion } from 'framer-motion';

const Navbar = () => {
  const location = useLocation();
  const { toggleTheme, theme } = useFavoritesStore();

  const isActive = (path) => {
    return location.pathname === path ? 'bg-pink-500 text-white shadow-lg' : 'text-gray-300 hover:text-white';
  };

  const navItems = [
    { path: '/', icon: FaHome, label: 'Home' },
    { path: '/favorites', icon: FaHeart, label: 'Favorites' },
    { path: '/recently-played', icon: FaClock, label: 'Recent' },
    { path: '/search', icon: FaSearch, label: 'Search' },
    { path: '/settings', icon: FaCog, label: 'Settings' },
  ];

  return (
    <nav className="bg-gradient-to-r from-gray-900 to-black border-b border-purple-600 shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3">
        <div className="flex items-center justify-between flex-wrap gap-4">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 text-xl sm:text-2xl font-bold text-white hover:text-pink-500 transition">
            <motion.div whileHover={{ rotate: 20 }}>
              <FaMusic className="text-pink-500" />
            </motion.div>
            <span className="hidden sm:inline">Electronic Radio</span>
            <span className="sm:hidden">E-Radio</span>
          </Link>

          {/* Navigation Links */}
          <div className="flex items-center gap-1 sm:gap-2 flex-wrap justify-center">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-3 sm:px-4 py-2 rounded-lg transition flex items-center gap-1 sm:gap-2 text-sm sm:text-base ${isActive(item.path)}`}
              >
                <item.icon />
                <span className="hidden sm:inline">{item.label}</span>
              </Link>
            ))}
          </div>

          {/* Theme Toggle */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            onClick={toggleTheme}
            className="px-3 sm:px-4 py-2 rounded-lg bg-purple-600 hover:bg-purple-700 text-white transition text-sm sm:text-base"
          >
            {theme === 'dark' ? '☀️' : '🌙'}
          </motion.button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
