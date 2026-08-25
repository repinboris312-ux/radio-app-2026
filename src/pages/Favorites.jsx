import React from 'react';
import StationList from '../components/StationList';
import { useFavoritesStore } from '../stores/favoritesStore';
import { FaHeart } from 'react-icons/fa';

const Favorites = ({ stations }) => {
  const { favorites } = useFavoritesStore();

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-white mb-2 flex items-center gap-2">
          <FaHeart className="text-red-500" /> My Favorites
        </h1>
        <p className="text-gray-400">Your saved favorite stations</p>
      </div>

      {favorites.length === 0 ? (
        <div className="text-center py-12 bg-gray-800 rounded-lg border-2 border-dashed border-gray-600">
          <FaHeart className="text-6xl text-gray-600 mx-auto mb-4" />
          <p className="text-gray-400 text-lg mb-4">No favorite stations yet</p>
          <p className="text-gray-500">Click the heart icon on any station to add it to your favorites</p>
        </div>
      ) : (
        <div>
          <div className="mb-6 p-4 bg-pink-900 rounded-lg border border-pink-700">
            <p className="text-pink-200">You have {favorites.length} favorite station{favorites.length !== 1 ? 's' : ''}</p>
          </div>
          <StationList stations={favorites} loading={false} />
        </div>
      )}
    </div>
  );
};

export default Favorites;
