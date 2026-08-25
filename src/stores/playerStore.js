import create from 'zustand';

export const usePlayerStore = create((set) => ({
  currentStation: null,
  isPlaying: false,
  queue: [],
  currentTime: 0,
  duration: 0,
  volume: 70,
  
  setCurrentStation: (station) => set({ currentStation: station, isPlaying: true }),
  setIsPlaying: (playing) => set({ isPlaying: playing }),
  setQueue: (queue) => set({ queue }),
  addToQueue: (station) => set((state) => ({ queue: [...state.queue, station] })),
  removeFromQueue: (stationId) => set((state) => ({
    queue: state.queue.filter(s => s.id !== stationId)
  })),
  clearQueue: () => set({ queue: [] }),
  setCurrentTime: (time) => set({ currentTime: time }),
  setDuration: (duration) => set({ duration }),
  setVolume: (volume) => set({ volume }),
}));
