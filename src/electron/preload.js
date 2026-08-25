const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
  getStations: () => ipcRenderer.invoke('get-stations'),
  onStationChange: (callback) => ipcRenderer.on('station-changed', callback),
});
