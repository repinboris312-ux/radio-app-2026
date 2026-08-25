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
      
      addFavorite: (station) => set((state) => ({
        favorites: [...state.favorites, station],
      })),
      
      removeFavorite: (stationId) => set((state) => ({
        favorites: state.favorites.filter(s => s.id !== stationId),
      })),
      
      toggleTheme: () => set((state) => ({
        theme: state.theme === 'dark' ? 'light' : 'dark',
      })),
      
      setQuality: (quality) => set({ quality }),
      setAutoplay: (autoplay) => set({ autoplay }),
      setNotifications: (notifications) => set({ notifications }),
    }),
    {
      name: 'radio-storage',
    }
  )
);
