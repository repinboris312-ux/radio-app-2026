import React, { useState } from 'react';
import StationList from '../components/StationList';
import { FaSearch } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Search = ({ stations }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState(stations);

  const handleSearch = (value) => {
    setSearchTerm(value);
    if (!value.trim()) {
      setResults(stations);
      return;
    }
    
    const filtered = stations.filter(station =>
      station.name.toLowerCase().includes(value.toLowerCase()) ||
      station.country.toLowerCase().includes(value.toLowerCase()) ||
      station.genre.toLowerCase().includes(value.toLowerCase()) ||
      (station.tags && station.tags.some(tag => tag.toLowerCase().includes(value.toLowerCase())))
    );
    setResults(filtered);
  };

  return (
    <div className="p-4 sm:p-6 max-w-7xl mx-auto">
      <motion.h1 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl sm:text-4xl font-bold text-white mb-6"
      >
        🔍 Search Stations
      </motion.h1>
      
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="mb-8"
      >
        <div className="relative">
          <FaSearch className="absolute left-4 top-3.5 text-gray-400 text-lg" />
          <input
            type="text"
            placeholder="Search by name, country, or genre..."
            value={searchTerm}
            onChange={(e) => handleSearch(e.target.value)}
            className="w-full pl-12 pr-4 py-3 bg-gray-800 text-white rounded-lg border border-gray-700 focus:border-pink-500 outline-none transition text-sm sm:text-base"
            autoFocus
          />
        </div>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-gray-400 mt-2 text-sm"
        >
          Found {results.length} station{results.length !== 1 ? 's' : ''}
        </motion.p>
      </motion.div>

      <StationList stations={results} loading={false} />
    </div>
  );
};

export default Search;
