import React, { useState, useEffect } from 'react';
import StationList from '../components/StationList';
import { FaFilter, FaSync } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Home = ({ stations, loading }) => {
  const [filteredStations, setFilteredStations] = useState(stations);
  const [selectedGenre, setSelectedGenre] = useState('All');
  const [selectedCountry, setSelectedCountry] = useState('All');
  const [selectedQuality, setSelectedQuality] = useState('All');

  useEffect(() => {
    let filtered = stations;

    if (selectedGenre !== 'All') {
      filtered = filtered.filter(s => s.genre === selectedGenre);
    }

    if (selectedCountry !== 'All') {
      filtered = filtered.filter(s => s.country === selectedCountry);
    }

    if (selectedQuality !== 'All') {
      filtered = filtered.filter(s => s.quality === selectedQuality);
    }

    setFilteredStations(filtered);
  }, [stations, selectedGenre, selectedCountry, selectedQuality]);

  const genres = ['All', ...new Set(stations.map(s => s.genre))];
  const countries = ['All', ...new Set(stations.map(s => s.country))];
  const qualities = ['All', ...new Set(stations.map(s => s.quality))];

  return (
    <div className="p-4 sm:p-6 max-w-7xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2">🎵 Electronic Radio</h1>
        <p className="text-gray-400 text-sm sm:text-base">Discover {stations.length}+ electronic music stations worldwide</p>
      </motion.div>

      {/* Filters */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="bg-gray-800 p-4 rounded-lg mb-6 border border-gray-700"
      >
        <div className="flex items-center gap-2 mb-4">
          <FaFilter className="text-pink-500" />
          <h2 className="text-lg font-bold text-white">Filters</h2>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div>
            <label className="block text-sm text-gray-300 mb-2">Genre</label>
            <select
              value={selectedGenre}
              onChange={(e) => setSelectedGenre(e.target.value)}
              className="w-full bg-gray-700 text-white rounded px-3 py-2 border border-gray-600 focus:border-pink-500 outline-none text-sm"
            >
              {genres.slice(0, 20).map(genre => (
                <option key={genre} value={genre}>{genre}</option>
              ))}
            </select>
          </div>
          
          <div>
            <label className="block text-sm text-gray-300 mb-2">Country</label>
            <select
              value={selectedCountry}
              onChange={(e) => setSelectedCountry(e.target.value)}
              className="w-full bg-gray-700 text-white rounded px-3 py-2 border border-gray-600 focus:border-pink-500 outline-none text-sm"
            >
              {countries.slice(0, 20).map(country => (
                <option key={country} value={country}>{country}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm text-gray-300 mb-2">Quality</label>
            <select
              value={selectedQuality}
              onChange={(e) => setSelectedQuality(e.target.value)}
              className="w-full bg-gray-700 text-white rounded px-3 py-2 border border-gray-600 focus:border-pink-500 outline-none text-sm"
            >
              {qualities.map(quality => (
                <option key={quality} value={quality}>{quality}</option>
              ))}
            </select>
          </div>

          <div className="flex items-end">
            <motion.button
              whileHover={{ scale: 1.05 }}
              onClick={() => {
                setSelectedGenre('All');
                setSelectedCountry('All');
                setSelectedQuality('All');
              }}
              className="w-full bg-pink-500 hover:bg-pink-600 text-white rounded px-3 py-2 flex items-center justify-center gap-2 transition text-sm"
            >
              <FaSync /> Reset
            </motion.button>
          </div>
        </div>
      </motion.div>

      {/* Stats */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 mb-6">
        <motion.div 
          whileHover={{ scale: 1.05 }}
          className="bg-gradient-to-br from-purple-600 to-purple-800 p-3 sm:p-4 rounded-lg text-center"
        >
          <p className="text-2xl sm:text-3xl font-bold text-white">{stations.length}</p>
          <p className="text-purple-200 text-xs sm:text-sm">Total Stations</p>
        </motion.div>
        <motion.div 
          whileHover={{ scale: 1.05 }}
          className="bg-gradient-to-br from-pink-600 to-pink-800 p-3 sm:p-4 rounded-lg text-center"
        >
          <p className="text-2xl sm:text-3xl font-bold text-white">{filteredStations.length}</p>
          <p className="text-pink-200 text-xs sm:text-sm">Filtered Results</p>
        </motion.div>
        <motion.div 
          whileHover={{ scale: 1.05 }}
          className="bg-gradient-to-br from-blue-600 to-blue-800 p-3 sm:p-4 rounded-lg text-center"
        >
          <p className="text-2xl sm:text-3xl font-bold text-white">{countries.length - 1}</p>
          <p className="text-blue-200 text-xs sm:text-sm">Countries</p>
        </motion.div>
      </div>

      {/* Station List */}
      <StationList stations={filteredStations} loading={loading} />
    </div>
  );
};

export default Home;
