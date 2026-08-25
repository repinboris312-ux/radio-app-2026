import create from 'zustand';

export const usePlayerStore = create((set) => ({
  currentStation: null,
  isPlaying: false,
  queue: [],
  
  setCurrentStation: (station) => set({ currentStation: station }),
  setIsPlaying: (playing) => set({ isPlaying: playing }),
  setQueue: (queue) => set({ queue }),
  addToQueue: (station) => set((state) => ({ queue: [...state.queue, station] })),
}));
