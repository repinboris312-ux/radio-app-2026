const { app, BrowserWindow, Menu, ipcMain } = require('electron');
const isDev = require('electron-is-dev');
const path = require('path');
const express = require('express');
const cors = require('cors');
const http = require('http');

let mainWindow;
let backendServer;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      nodeIntegration: false,
      contextIsolation: true,
    },
  });

  const startUrl = isDev
    ? 'http://localhost:3000'
    : `file://${path.join(__dirname, '../../build/index.html')}`;

  mainWindow.loadURL(startUrl);

  if (isDev) {
    mainWindow.webContents.openDevTools();
  }

  mainWindow.on('closed', () => {
    mainWindow = null;
  });
}

function startBackendServer() {
  const expressApp = express();
  expressApp.use(cors());
  expressApp.use(express.json());

  // API endpoint untuk daftar stasiun radio
  expressApp.get('/api/stations', (req, res) => {
    const stations = require('./data/stations.json');
    res.json(stations);
  });

  // Health check
  expressApp.get('/api/health', (req, res) => {
    res.json({ status: 'ok' });
  });

  const server = http.createServer(expressApp);
  server.listen(5000, () => {
    console.log('Backend server running on port 5000');
  });
  return server;
}

app.on('ready', () => {
  backendServer = startBackendServer();
  createWindow();
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow();
  }
});

ipcMain.handle('get-stations', async () => {
  try {
    const stations = require('./data/stations.json');
    return stations;
  } catch (error) {
    console.error('Error loading stations:', error);
    return [];
  }
});
