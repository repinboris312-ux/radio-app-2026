import React, { useState, useEffect } from 'react';
import StationList from '../components/StationList';
import { FaFilter } from 'react-icons/fa';

const Home = ({ stations, loading }) => {
  const [filteredStations, setFilteredStations] = useState(stations);
  const [selectedGenre, setSelectedGenre] = useState('All');
  const [selectedCountry, setSelectedCountry] = useState('All');

  useEffect(() => {
    let filtered = stations;

    if (selectedGenre !== 'All') {
      filtered = filtered.filter(s => s.genre === selectedGenre);
    }

    if (selectedCountry !== 'All') {
      filtered = filtered.filter(s => s.country === selectedCountry);
    }

    setFilteredStations(filtered);
  }, [stations, selectedGenre, selectedCountry]);

  const genres = ['All', ...new Set(stations.map(s => s.genre))];
  const countries = ['All', ...new Set(stations.map(s => s.country))];

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-white mb-2">🎵 Electronic Radio</h1>
        <p className="text-gray-400">Discover 200+ electronic music stations worldwide</p>
      </div>

      {/* Filters */}
      <div className="bg-gray-800 p-4 rounded-lg mb-6 border border-gray-700">
        <div className="flex items-center gap-2 mb-4">
          <FaFilter className="text-pink-500" />
          <h2 className="text-lg font-bold text-white">Filters</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm text-gray-300 mb-2">Genre</label>
            <select
              value={selectedGenre}
              onChange={(e) => setSelectedGenre(e.target.value)}
              className="w-full bg-gray-700 text-white rounded px-3 py-2 border border-gray-600 focus:border-pink-500 outline-none"
            >
              {genres.map(genre => (
                <option key={genre} value={genre}>{genre}</option>
              ))}
            </select>
          </div>
          
          <div>
            <label className="block text-sm text-gray-300 mb-2">Country</label>
            <select
              value={selectedCountry}
              onChange={(e) => setSelectedCountry(e.target.value)}
              className="w-full bg-gray-700 text-white rounded px-3 py-2 border border-gray-600 focus:border-pink-500 outline-none"
            >
              {countries.map(country => (
                <option key={country} value={country}>{country}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4 mb-6">
        <div className="bg-gradient-to-br from-purple-600 to-purple-800 p-4 rounded-lg text-center">
          <p className="text-3xl font-bold text-white">{stations.length}</p>
          <p className="text-purple-200 text-sm">Total Stations</p>
        </div>
        <div className="bg-gradient-to-br from-pink-600 to-pink-800 p-4 rounded-lg text-center">
          <p className="text-3xl font-bold text-white">{filteredStations.length}</p>
          <p className="text-pink-200 text-sm">Filtered Results</p>
        </div>
        <div className="bg-gradient-to-br from-blue-600 to-blue-800 p-4 rounded-lg text-center">
          <p className="text-3xl font-bold text-white">{countries.length - 1}</p>
          <p className="text-blue-200 text-sm">Countries</p>
        </div>
      </div>

      {/* Station List */}
      <StationList stations={filteredStations} loading={loading} />
    </div>
  );
};

export default Home;
