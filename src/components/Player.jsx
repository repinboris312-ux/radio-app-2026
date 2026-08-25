import React, { useState, useEffect } from 'react';
import { FaPlay, FaPause, FaVolumeMute, FaVolumeUp, FaHeart, FaRegHeart, FaDownload } from 'react-icons/fa';
import { usePlayerStore } from '../stores/playerStore';
import { useFavoritesStore } from '../stores/favoritesStore';
import { motion } from 'framer-motion';

const Player = ({ station }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
  const { volume, setVolume } = usePlayerStore();
  const { addFavorite, removeFavorite, favorites, addRecentlyPlayed } = useFavoritesStore();

  useEffect(() => {
    if (station) {
      setIsFavorite(favorites.some(fav => fav.id === station.id));
      addRecentlyPlayed(station);
    }
  }, [station, favorites]);

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
    if (station) {
      const audio = document.getElementById('player-audio');
      if (audio) {
        if (!isPlaying) {
          audio.src = station.url;
          audio.play().catch(e => console.error('Playback error:', e));
        } else {
          audio.pause();
        }
      }
    }
  };

  const handleFavorite = () => {
    if (station) {
      if (isFavorite) {
        removeFavorite(station.id);
      } else {
        addFavorite(station);
      }
      setIsFavorite(!isFavorite);
    }
  };

  return (
    <motion.div 
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      className="bg-gradient-to-r from-purple-900 to-pink-900 p-4 shadow-2xl border-t border-purple-700"
    >
      <audio id="player-audio" crossOrigin="anonymous" />
      
      {station ? (
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between gap-4 flex-wrap">
            {/* Station Info */}
            <div className="flex-1 min-w-0">
              <h3 className="text-white font-bold text-lg truncate">{station.name}</h3>
              <p className="text-purple-200 text-sm truncate">
                {station.country} • {station.genre} • {station.bitrate}
              </p>
              <p className="text-xs text-purple-300 mt-1">Listeners: {station.listeners?.toLocaleString()}</p>
            </div>

            {/* Controls */}
            <div className="flex items-center gap-3 flex-wrap justify-end">
              {/* Play/Pause */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={handlePlayPause}
                className="bg-pink-500 hover:bg-pink-600 text-white p-3 rounded-full transition"
              >
                {isPlaying ? <FaPause size={20} /> : <FaPlay size={20} />}
              </motion.button>

              {/* Volume Control */}
              <div className="flex items-center gap-2">
                <FaVolumeUp className="text-purple-300" size={16} />
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={volume}
                  onChange={(e) => setVolume(parseInt(e.target.value))}
                  className="w-20 h-2 bg-purple-700 rounded-lg appearance-none cursor-pointer"
                />
                <span className="text-purple-300 text-xs w-8">{volume}%</span>
              </div>

              {/* Favorite Button */}
              <motion.button
                whileHover={{ scale: 1.2 }}
                onClick={handleFavorite}
                className="text-2xl transition"
              >
                {isFavorite ? (
                  <FaHeart className="text-red-500" />
                ) : (
                  <FaRegHeart className="text-purple-300" />
                )}
              </motion.button>

              {/* Status Indicator */}
              <div className="flex items-center gap-2">
                <div className={`w-3 h-3 rounded-full ${
                  isPlaying ? 'bg-green-500 animate-pulse' : 'bg-gray-500'
                }`} />
                <span className="text-sm text-purple-300 hidden sm:inline">
                  {isPlaying ? '🎵 Live' : '⏸ Ready'}
                </span>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="text-center text-purple-300 py-4">
          <p>Select a station to start playing</p>
        </div>
      )}
    </motion.div>
  );
};

export default Player;
