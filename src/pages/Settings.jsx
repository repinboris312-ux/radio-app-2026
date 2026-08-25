import React from 'react';
import { useFavoritesStore } from '../stores/favoritesStore';
import { FaCog, FaVolumeUp, FaBell, FaDownload, FaInfoCircle } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Settings = () => {
  const { theme, quality, autoplay, notifications, toggleTheme, setQuality, setAutoplay, setNotifications } = useFavoritesStore();

  return (
    <div className="p-4 sm:p-6 max-w-4xl mx-auto">
      <motion.h1 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl sm:text-4xl font-bold text-white mb-8 flex items-center gap-2"
      >
        <FaCog /> Settings
      </motion.h1>

      <div className="space-y-6">
        {/* Theme Settings */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gray-800 p-4 sm:p-6 rounded-lg border border-gray-700"
        >
          <h2 className="text-lg sm:text-xl font-bold text-white mb-4">Appearance</h2>
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <p className="text-white font-semibold text-sm sm:text-base">Theme</p>
              <p className="text-gray-400 text-xs sm:text-sm">Choose your preferred theme</p>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              onClick={toggleTheme}
              className="px-4 sm:px-6 py-2 bg-pink-500 hover:bg-pink-600 text-white rounded-lg transition font-semibold text-sm"
            >
              {theme === 'dark' ? '☀️ Light Mode' : '🌙 Dark Mode'}
            </motion.button>
          </div>
        </motion.div>

        {/* Audio Settings */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-gray-800 p-4 sm:p-6 rounded-lg border border-gray-700"
        >
          <h2 className="text-lg sm:text-xl font-bold text-white mb-4 flex items-center gap-2">
            <FaVolumeUp /> Audio Quality
          </h2>
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <p className="text-white font-semibold text-sm sm:text-base">Preferred Quality</p>
              <p className="text-gray-400 text-xs sm:text-sm">Higher quality uses more bandwidth</p>
            </div>
            <select
              value={quality}
              onChange={(e) => setQuality(e.target.value)}
              className="bg-gray-700 text-white rounded px-3 sm:px-4 py-2 border border-gray-600 focus:border-pink-500 outline-none text-sm"
            >
              <option value="Low">Low (96 kbps)</option>
              <option value="Medium">Medium (128 kbps)</option>
              <option value="High">High (192 kbps)</option>
              <option value="Lossless">Lossless (320 kbps)</option>
            </select>
          </div>
        </motion.div>

        {/* Autoplay Settings */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-gray-800 p-4 sm:p-6 rounded-lg border border-gray-700"
        >
          <h2 className="text-lg sm:text-xl font-bold text-white mb-4">Playback</h2>
          <label className="flex items-center gap-3 cursor-pointer">
            <input
              type="checkbox"
              checked={autoplay}
              onChange={(e) => setAutoplay(e.target.checked)}
              className="w-5 h-5"
            />
            <div>
              <p className="text-white font-semibold text-sm sm:text-base">Autoplay</p>
              <p className="text-gray-400 text-xs sm:text-sm">Automatically play station on selection</p>
            </div>
          </label>
        </motion.div>

        {/* Notifications */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-gray-800 p-4 sm:p-6 rounded-lg border border-gray-700"
        >
          <h2 className="text-lg sm:text-xl font-bold text-white mb-4 flex items-center gap-2">
            <FaBell /> Notifications
          </h2>
          <label className="flex items-center gap-3 cursor-pointer">
            <input
              type="checkbox"
              checked={notifications}
              onChange={(e) => setNotifications(e.target.checked)}
              className="w-5 h-5"
            />
            <div>
              <p className="text-white font-semibold text-sm sm:text-base">Enable Notifications</p>
              <p className="text-gray-400 text-xs sm:text-sm">Get notified about new stations and events</p>
            </div>
          </label>
        </motion.div>

        {/* Download Section */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-gray-800 p-4 sm:p-6 rounded-lg border border-gray-700"
        >
          <h2 className="text-lg sm:text-xl font-bold text-white mb-4 flex items-center gap-2">
            <FaDownload /> Downloads
          </h2>
          <div className="space-y-2 text-gray-200 text-sm">
            <p>Download the app for your device:</p>
            <ul className="list-disc list-inside space-y-1 text-xs sm:text-sm">
              <li><a href="#" className="text-pink-400 hover:text-pink-300">Windows (EXE)</a></li>
              <li><a href="#" className="text-pink-400 hover:text-pink-300">macOS (DMG)</a></li>
              <li><a href="#" className="text-pink-400 hover:text-pink-300">Linux (AppImage)</a></li>
              <li><a href="#" className="text-pink-400 hover:text-pink-300">Android APK</a></li>
            </ul>
          </div>
        </motion.div>

        {/* App Info */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-gradient-to-r from-purple-900 to-pink-900 p-4 sm:p-6 rounded-lg border border-purple-700"
        >
          <h2 className="text-lg sm:text-xl font-bold text-white mb-4 flex items-center gap-2">
            <FaInfoCircle /> About
          </h2>
          <div className="space-y-2 text-gray-200 text-xs sm:text-sm">
            <p><span className="font-semibold">App Name:</span> Electronic Radio</p>
            <p><span className="font-semibold">Version:</span> 1.0.0</p>
            <p><span className="font-semibold">Stations:</span> 200+</p>
            <p><span className="font-semibold">Platform:</span> Desktop & Mobile</p>
            <p><span className="font-semibold">Future Features (2034):</span></p>
            <ul className="list-disc list-inside ml-2 space-y-1">
              <li>AI Recommendations</li>
              <li>Spatial Audio & Dolby Atmos</li>
              <li>Metaverse Integration</li>
              <li>AR Visualizations</li>
              <li>Blockchain Rewards</li>
              <li>5G/6G Optimization</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Settings;
