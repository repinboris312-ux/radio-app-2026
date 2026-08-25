import React from 'react';
import StationList from '../components/StationList';
import { useFavoritesStore } from '../stores/favoritesStore';
import { FaHeart } from 'react-icons/fa';
import { motion } from 'framer-motion';

const RecentlyPlayed = ({ stations }) => {
  const { recentlyPlayed } = useFavoritesStore();

  return (
    <div className="p-4 sm:p-6 max-w-7xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2 flex items-center gap-2">
          ⏱️ Recently Played
        </h1>
        <p className="text-gray-400 text-sm sm:text-base">Your listening history</p>
      </motion.div>

      {recentlyPlayed.length === 0 ? (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-12 bg-gray-800 rounded-lg border-2 border-dashed border-gray-600"
        >
          <FaHeart className="text-6xl text-gray-600 mx-auto mb-4" />
          <p className="text-gray-400 text-lg mb-4">No recently played stations yet</p>
          <p className="text-gray-500 text-sm">Play some stations to see them here</p>
        </motion.div>
      ) : (
        <div>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mb-6 p-4 bg-blue-900 rounded-lg border border-blue-700"
          >
            <p className="text-blue-200">You have {recentlyPlayed.length} recently played station{recentlyPlayed.length !== 1 ? 's' : ''}</p>
          </motion.div>
          <StationList stations={recentlyPlayed} loading={false} />
        </div>
      )}
    </div>
  );
};

export default RecentlyPlayed;
