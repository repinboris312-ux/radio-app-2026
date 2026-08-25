import React, { useState, useEffect } from 'react';
import { FaPlay, FaPause, FaVolumeMute, FaVolumeUp, FaHeart, FaRegHeart } from 'react-icons/fa';
import { usePlayerStore } from '../stores/playerStore';
import { useFavoritesStore } from '../stores/favoritesStore';

const Player = ({ station }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(70);
  const [isFavorite, setIsFavorite] = useState(false);
  const { addFavorite, removeFavorite, favorites } = useFavoritesStore();

  useEffect(() => {
    if (station) {
      setIsFavorite(favorites.some(fav => fav.id === station.id));
    }
  }, [station, favorites]);

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
    if (station) {
      const audio = document.getElementById('player-audio');
      if (audio) {
        if (!isPlaying) {
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
    <div className="bg-gradient-to-r from-purple-900 to-pink-900 p-4 shadow-2xl border-t border-purple-700">
      <audio id="player-audio" crossOrigin="anonymous" />
      
      {station ? (
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between gap-4">
            {/* Station Info */}
            <div className="flex-1 min-w-0">
              <h3 className="text-white font-bold text-lg truncate">{station.name}</h3>
              <p className="text-purple-200 text-sm truncate">
                {station.country} • {station.genre}
              </p>
            </div>

            {/* Controls */}
            <div className="flex items-center gap-4">
              {/* Play/Pause */}
              <button
                onClick={handlePlayPause}
                className="bg-pink-500 hover:bg-pink-600 text-white p-3 rounded-full transition transform hover:scale-110"
              >
                {isPlaying ? <FaPause size={20} /> : <FaPlay size={20} />}
              </button>

              {/* Volume Control */}
              <div className="flex items-center gap-2">
                <FaVolumeUp className="text-purple-300" />
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={volume}
                  onChange={(e) => setVolume(e.target.value)}
                  className="w-24 h-2 bg-purple-700 rounded-lg appearance-none cursor-pointer"
                />
                <span className="text-purple-300 text-sm w-8">{volume}%</span>
              </div>

              {/* Favorite Button */}
              <button
                onClick={handleFavorite}
                className="text-2xl transition transform hover:scale-110"
              >
                {isFavorite ? (
                  <FaHeart className="text-red-500" />
                ) : (
                  <FaRegHeart className="text-purple-300" />
                )}
              </button>

              {/* Status Indicator */}
              <div className="flex items-center gap-2">
                <div className={`w-3 h-3 rounded-full ${isPlaying ? 'bg-green-500 animate-pulse' : 'bg-gray-500'}`} />
                <span className="text-sm text-purple-300">
                  {isPlaying ? 'Live' : 'Ready'}
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
    </div>
  );
};

export default Player;
