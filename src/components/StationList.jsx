import React, { useState, useEffect } from 'react';
import { FaPlay, FaHeart, FaRegHeart, FaMusic } from 'react-icons/fa';
import { usePlayerStore } from '../stores/playerStore';
import { useFavoritesStore } from '../stores/favoritesStore';
import { motion } from 'framer-motion';

const StationCard = ({ station }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const { setCurrentStation, currentStation } = usePlayerStore();
  const { addFavorite, removeFavorite, favorites } = useFavoritesStore();
  const isPlaying = currentStation?.id === station.id;

  useEffect(() => {
    setIsFavorite(favorites.some(fav => fav.id === station.id));
  }, [favorites, station.id]);

  const handleFavorite = (e) => {
    e.stopPropagation();
    if (isFavorite) {
      removeFavorite(station.id);
    } else {
      addFavorite(station);
    }
    setIsFavorite(!isFavorite);
  };

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      onClick={() => setCurrentStation(station)}
      className={`p-4 rounded-lg cursor-pointer transition ${
        isPlaying
          ? 'bg-gradient-to-br from-pink-500 to-purple-600 shadow-2xl'
          : 'bg-gray-800 hover:bg-gray-700 border border-gray-700'
      }`}
    >
      <div className="flex items-start justify-between">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-2">
            <FaMusic className={isPlaying ? 'text-white animate-bounce' : 'text-gray-400'} size={14} />
            <h3 className="font-bold text-white truncate text-sm sm:text-base">{station.name}</h3>
          </div>
          <p className="text-xs sm:text-sm text-gray-300">{station.country}</p>
          <p className="text-xs text-gray-400 mt-1">{station.genre}</p>
          <p className={`text-xs mt-2 ${
            station.quality === 'High' ? 'text-green-400' : 'text-yellow-400'
          }`}>
            {station.quality} • {station.bitrate} • {station.listeners?.toLocaleString()} listeners
          </p>
        </div>
        <div className="flex flex-col gap-2 ml-2">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={(e) => {
              e.stopPropagation();
              setCurrentStation(station);
            }}
            className="bg-pink-500 hover:bg-pink-600 text-white p-2 rounded-full transition"
          >
            <FaPlay size={12} />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.2 }}
            onClick={handleFavorite}
            className="text-xl transition"
          >
            {isFavorite ? (
              <FaHeart className="text-red-500" />
            ) : (
              <FaRegHeart className="text-gray-400 hover:text-red-500" />
            )}
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

const StationList = ({ stations, loading }) => {
  if (loading) {
    return (
      <div className="flex justify-center items-center h-96">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <FaMusic className="text-4xl text-pink-500" />
        </motion.div>
      </div>
    );
  }

  if (!stations || stations.length === 0) {
    return (
      <div className="text-center py-12">
        <FaMusic className="text-6xl text-gray-600 mx-auto mb-4" />
        <p className="text-gray-400 text-lg">No stations found</p>
      </div>
    );
  }

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
    >
      {stations.map((station, index) => (
        <motion.div
          key={station.id}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.05 }}
        >
          <StationCard station={station} />
        </motion.div>
      ))}
    </motion.div>
  );
};

export default StationList;
