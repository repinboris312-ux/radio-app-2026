import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000';

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const stationService = {
  getAll: () => apiClient.get('/api/stations'),
  getById: (id) => apiClient.get(`/api/stations/${id}`),
  search: (query) => apiClient.get(`/api/stations/search?q=${query}`),
};

export const playerService = {
  getStream: (stationId) => apiClient.get(`/api/stream/${stationId}`),
  getMetadata: (stationId) => apiClient.get(`/api/metadata/${stationId}`),
};

export default apiClient;
