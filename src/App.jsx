import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Player from './components/Player';
import Home from './pages/Home';
import Favorites from './pages/Favorites';
import RecentlyPlayed from './pages/RecentlyPlayed';
import Search from './pages/Search';
import Settings from './pages/Settings';
import { usePlayerStore } from './stores/playerStore';
import { useFavoritesStore } from './stores/favoritesStore';
import './styles/index.css';

function App() {
  const [stations, setStations] = useState([]);
  const [loading, setLoading] = useState(true);
  const { currentStation } = usePlayerStore();
  const { theme } = useFavoritesStore();

  useEffect(() => {
    loadStations();
  }, []);

  const loadStations = async () => {
    try {
      setLoading(true);
      let data;
      
      if (window.electronAPI) {
        data = await window.electronAPI.getStations();
      } else {
        // Fallback to local data
        const response = await fetch('/data/stations.json');
        if (!response.ok) throw new Error('Failed to load stations');
        data = await response.json();
      }
      
      setStations(data || []);
    } catch (error) {
      console.error('Error loading stations:', error);
      // Use hardcoded fallback data
      setStations(require('./data/stations.json'));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={theme === 'dark' ? 'dark' : 'light'}>
      <Router>
        <div className="flex flex-col h-screen bg-gradient-to-br from-gray-900 to-black text-white overflow-hidden">
          <Navbar />
          
          <div className="flex-1 overflow-y-auto">
            <Routes>
              <Route path="/" element={<Home stations={stations} loading={loading} />} />
              <Route path="/favorites" element={<Favorites stations={stations} />} />
              <Route path="/recently-played" element={<RecentlyPlayed stations={stations} />} />
              <Route path="/search" element={<Search stations={stations} />} />
              <Route path="/settings" element={<Settings />} />
            </Routes>
          </div>
          
          <Player station={currentStation} />
        </div>
      </Router>
    </div>
  );
}

export default App;
