#!/bin/bash

echo "Installing Electronic Radio App..."

# Install dependencies
npm install

# Build React app
npm run react-build

# Build Electron
npm run electron-build

echo "Build completed! Check the dist folder for installers."
