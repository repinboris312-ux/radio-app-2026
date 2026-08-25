import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaHome, FaHeart, FaSearch, FaCog, FaMusic } from 'react-icons/fa';
import { useFavoritesStore } from '../stores/favoritesStore';

const Navbar = () => {
  const location = useLocation();
  const { toggleTheme, theme } = useFavoritesStore();

  const isActive = (path) => {
    return location.pathname === path ? 'bg-pink-500 text-white' : 'text-gray-300 hover:text-white';
  };

  return (
    <nav className="bg-gradient-to-r from-gray-900 to-black border-b border-purple-600 shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 text-2xl font-bold text-white hover:text-pink-500 transition">
            <FaMusic className="text-pink-500" />
            <span>Electronic Radio</span>
          </Link>

          {/* Navigation Links */}
          <div className="flex items-center gap-2">
            <Link
              to="/"
              className={`px-4 py-2 rounded-lg transition flex items-center gap-2 ${isActive('/')}`}
            >
              <FaHome /> Home
            </Link>
            <Link
              to="/favorites"
              className={`px-4 py-2 rounded-lg transition flex items-center gap-2 ${isActive('/favorites')}`}
            >
              <FaHeart /> Favorites
            </Link>
            <Link
              to="/search"
              className={`px-4 py-2 rounded-lg transition flex items-center gap-2 ${isActive('/search')}`}
            >
              <FaSearch /> Search
            </Link>
            <Link
              to="/settings"
              className={`px-4 py-2 rounded-lg transition flex items-center gap-2 ${isActive('/settings')}`}
            >
              <FaCog /> Settings
            </Link>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="ml-4 px-4 py-2 rounded-lg bg-purple-600 hover:bg-purple-700 text-white transition"
            >
              {theme === 'dark' ? '☀️ Light' : '🌙 Dark'}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
