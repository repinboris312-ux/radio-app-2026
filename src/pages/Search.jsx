import React, { useState } from 'react';
import StationList from '../components/StationList';
import { FaSearch } from 'react-icons/fa';

const Search = ({ stations }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState(stations);

  const handleSearch = (value) => {
    setSearchTerm(value);
    const filtered = stations.filter(station =>
      station.name.toLowerCase().includes(value.toLowerCase()) ||
      station.country.toLowerCase().includes(value.toLowerCase()) ||
      station.genre.toLowerCase().includes(value.toLowerCase()) ||
      (station.tags && station.tags.some(tag => tag.toLowerCase().includes(value.toLowerCase())))
    );
    setResults(filtered);
  };

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h1 className="text-4xl font-bold text-white mb-6">🔍 Search Stations</h1>
      
      <div className="mb-8">
        <div className="relative">
          <FaSearch className="absolute left-4 top-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search by name, country, or genre..."
            value={searchTerm}
            onChange={(e) => handleSearch(e.target.value)}
            className="w-full pl-12 pr-4 py-3 bg-gray-800 text-white rounded-lg border border-gray-700 focus:border-pink-500 outline-none transition"
          />
        </div>
        <p className="text-gray-400 mt-2">
          Found {results.length} station{results.length !== 1 ? 's' : ''}
        </p>
      </div>

      <StationList stations={results} loading={false} />
    </div>
  );
};

export default Search;
