import React from 'react';
import { useFavoritesStore } from '../stores/favoritesStore';
import { FaCog, FaVolumeUp, FaBell } from 'react-icons/fa';

const Settings = () => {
  const { theme, quality, autoplay, notifications, toggleTheme, setQuality, setAutoplay, setNotifications } = useFavoritesStore();

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-white mb-8 flex items-center gap-2">
        <FaCog /> Settings
      </h1>

      <div className="space-y-6">
        {/* Theme Settings */}
        <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
          <h2 className="text-xl font-bold text-white mb-4">Appearance</h2>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-white font-semibold">Theme</p>
              <p className="text-gray-400 text-sm">Choose your preferred theme</p>
            </div>
            <button
              onClick={toggleTheme}
              className="px-6 py-2 bg-pink-500 hover:bg-pink-600 text-white rounded-lg transition font-semibold"
            >
              {theme === 'dark' ? '☀️ Light Mode' : '🌙 Dark Mode'}
            </button>
          </div>
        </div>

        {/* Audio Settings */}
        <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
          <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <FaVolumeUp /> Audio Quality
          </h2>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-white font-semibold">Preferred Quality</p>
              <p className="text-gray-400 text-sm">Higher quality uses more bandwidth</p>
            </div>
            <select
              value={quality}
              onChange={(e) => setQuality(e.target.value)}
              className="bg-gray-700 text-white rounded px-4 py-2 border border-gray-600 focus:border-pink-500 outline-none"
            >
              <option value="Low">Low (96 kbps)</option>
              <option value="Medium">Medium (128 kbps)</option>
              <option value="High">High (192 kbps)</option>
              <option value="Lossless">Lossless (320 kbps)</option>
            </select>
          </div>
        </div>

        {/* Autoplay Settings */}
        <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
          <h2 className="text-xl font-bold text-white mb-4">Playback</h2>
          <label className="flex items-center gap-3 cursor-pointer">
            <input
              type="checkbox"
              checked={autoplay}
              onChange={(e) => setAutoplay(e.target.checked)}
              className="w-5 h-5"
            />
            <div>
              <p className="text-white font-semibold">Autoplay</p>
              <p className="text-gray-400 text-sm">Automatically play station on selection</p>
            </div>
          </label>
        </div>

        {/* Notifications */}
        <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
          <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
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
              <p className="text-white font-semibold">Enable Notifications</p>
              <p className="text-gray-400 text-sm">Get notified about new stations and events</p>
            </div>
          </label>
        </div>

        {/* App Info */}
        <div className="bg-gradient-to-r from-purple-900 to-pink-900 p-6 rounded-lg border border-purple-700">
          <h2 className="text-xl font-bold text-white mb-4">About</h2>
          <div className="space-y-2 text-gray-200">
            <p><span className="font-semibold">App Name:</span> Electronic Radio</p>
            <p><span className="font-semibold">Version:</span> 1.0.0</p>
            <p><span className="font-semibold">Stations:</span> 200+</p>
            <p><span className="font-semibold">Platform:</span> Desktop (Windows, macOS, Linux)</p>
            <p><span className="font-semibold">Future Features:</span> AI Recommendations, Spatial Audio, AR Visualizations</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
