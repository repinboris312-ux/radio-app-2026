import create from 'zustand';
import { persist } from 'zustand/middleware';

export const useFavoritesStore = create(
  persist(
    (set) => ({
      favorites: [],
      theme: 'dark',
      quality: 'High',
      autoplay: true,
      notifications: true,
      recentlyPlayed: [],
      language: 'en',
      
      addFavorite: (station) => set((state) => {
        if (state.favorites.find(s => s.id === station.id)) return state;
        return { favorites: [...state.favorites, station] };
      }),
      
      removeFavorite: (stationId) => set((state) => ({
        favorites: state.favorites.filter(s => s.id !== stationId),
      })),
      
      addRecentlyPlayed: (station) => set((state) => {
        const filtered = state.recentlyPlayed.filter(s => s.id !== station.id);
        return { recentlyPlayed: [station, ...filtered].slice(0, 50) };
      }),
      
      toggleTheme: () => set((state) => ({
        theme: state.theme === 'dark' ? 'light' : 'dark',
      })),
      
      setQuality: (quality) => set({ quality }),
      setAutoplay: (autoplay) => set({ autoplay }),
      setNotifications: (notifications) => set({ notifications }),
      setLanguage: (language) => set({ language }),
    }),
    {
      name: 'radio-storage',
    }
  )
);
