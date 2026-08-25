import React, { useState, useEffect } from 'react';
import { FaPlay, FaHeart, FaRegHeart, FaMusic } from 'react-icons/fa';
import { usePlayerStore } from '../stores/playerStore';
import { useFavoritesStore } from '../stores/favoritesStore';

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
    <div
      onClick={() => setCurrentStation(station)}
      className={`p-4 rounded-lg cursor-pointer transition transform hover:scale-105 ${
        isPlaying
          ? 'bg-gradient-to-br from-pink-500 to-purple-600 shadow-2xl'
          : 'bg-gray-800 hover:bg-gray-700 border border-gray-700'
      }`}
    >
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <FaMusic className={isPlaying ? 'text-white animate-bounce' : 'text-gray-400'} />
            <h3 className="font-bold text-white truncate">{station.name}</h3>
          </div>
          <p className="text-sm text-gray-300 mt-1">{station.country}</p>
          <p className="text-xs text-gray-400 mt-1">{station.genre}</p>
          <p className={`text-xs mt-2 ${
            station.quality === 'High' ? 'text-green-400' : 'text-yellow-400'
          }`}>
            Quality: {station.quality} • Bitrate: {station.bitrate}
          </p>
        </div>
        <div className="flex flex-col gap-2 ml-2">
          <button
            onClick={(e) => {
              e.stopPropagation();
              setCurrentStation(station);
            }}
            className="bg-pink-500 hover:bg-pink-600 text-white p-2 rounded-full transition"
          >
            <FaPlay size={14} />
          </button>
          <button
            onClick={handleFavorite}
            className="text-xl transition"
          >
            {isFavorite ? (
              <FaHeart className="text-red-500" />
            ) : (
              <FaRegHeart className="text-gray-400 hover:text-red-500" />
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

const StationList = ({ stations, loading }) => {
  if (loading) {
    return (
      <div className="flex justify-center items-center h-96">
        <div className="animate-spin">
          <FaMusic className="text-4xl text-pink-500" />
        </div>
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
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {stations.map((station) => (
        <StationCard key={station.id} station={station} />
      ))}
    </div>
  );
};

export default StationList;
