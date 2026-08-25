# Troubleshooting Guide

## Common Issues & Solutions

### 1. Application Won't Start

**Error:** Application crashes on startup

**Solutions:**
```bash
# Clear cache and reinstall
rm -rf node_modules
npm cache clean --force
npm install

# For Electron
rm -rf dist
npm run electron-build
```

### 2. No Audio/No Sound

**Symptoms:** App loads but no sound plays

**Solutions:**
- Check system volume is not muted
- Check browser/app audio permissions
- In browser: Settings > Privacy > Microphone/Audio
- Try different station
- Check browser console (F12) for errors

```bash
# For Chrome/Chromium based:
# Settings > Privacy and security > Site settings > Audio
# Allow audio for localhost:3000
```

### 3. Stations Not Loading

**Error:** "No stations found" or empty list

**Solutions:**
```bash
# Start backend server
node src/server.js

# Check server is running
curl http://localhost:5000/api/health

# Check for CORS issues in console
# Backend logs should show requests
```

### 4. Port Already in Use

**Error:** "Port 3000 already in use" or similar

**Solution - Windows:**
```bash
# Find process using port
netstat -ano | findstr :3000

# Kill process (replace PID)
taskkill /PID 1234 /F
```

**Solution - macOS/Linux:**
```bash
# Find process
lsof -i :3000

# Kill process
kill -9 1234
```

**Alternative:** Use different port
```bash
PORT=3001 npm start
```

### 5. Build Fails on Windows

**Error:** "python not found" or "Visual Studio Build Tools required"

**Solution:**
```bash
# Install windows-build-tools
npm install --global --production windows-build-tools

# Or install manually:
# Download Visual Studio Community
# Select "Desktop development with C++"
```

### 6. Electron Won't Start

**Error:** "Electron failed to start"

**Solution:**
```bash
# Rebuild native modules
npm rebuild

# Clear Electron cache
rm -rf ~/.config/Electron (Linux)
rm -rf ~/Library/Application\ Support/Electron (macOS)
rmdir %APPDATA%/Electron (Windows)

# Reinstall
npm install
npm run dev
```

### 7. Android APK Won't Install

**Error:** "App not installed" or "Parse error"

**Solutions:**
- Enable "Unknown Sources": Settings > Security > Unknown Sources
- Check device has enough storage (min 100MB free)
- Uninstall old version first
- Try different installation method (ADB instead of direct)

```bash
# Via ADB
adb install -r app-release.apk
```

### 8. Android App Crashes

**Solution:**
```bash
# View Android logs
adb logcat | grep electronicradio

# Save logs to file
adb logcat > app_logs.txt
```

### 9. High CPU/Battery Usage

**Issue:** App uses too much CPU or drains battery

**Solutions:**
- Check if station is still streaming (pause/stop)
- Reduce audio quality in Settings
- Close app when not in use
- Update app to latest version

### 10. Favorites Not Saving

**Issue:** Favorites list resets when app closes

**Solution:**
- Check browser localStorage is enabled
- Check device has write permissions
- Clear browser cache carefully (preserves local storage)
- Try different browser

## Browser Console Debugging

Press `F12` to open Developer Tools:

1. **Console Tab:** Check for JavaScript errors (red text)
2. **Network Tab:** Check if API calls are succeeding (green 200)
3. **Application Tab:** Check localStorage for saved data
4. **Elements/Inspector:** Check DOM structure

## Performance Optimization

### Slow App Loading

```bash
# Analyze bundle size
npm run build -- --analyze

# Clear browser cache
# Chrome: Ctrl+Shift+Delete
# Firefox: Ctrl+Shift+Delete
# Safari: Develop > Empty Caches
```

### Slow Streaming

- Reduce audio quality in Settings
- Check internet speed: speedtest.net
- Try different station
- Move closer to WiFi router

## Getting Help

1. Check GitHub Issues: https://github.com/repinboris312-ux/radio-app-2026/issues
2. Search similar issues
3. Create new issue with:
   - Error message
   - Steps to reproduce
   - Operating system version
   - App version
   - Browser/device info
   - Console/debug logs

## Debug Mode

Enable verbose logging:

```bash
# Development
DEBUG=* npm start

# Electron
DEBUG=* npm run dev

# Android
adb logcat -s electronicradio
```

## Report a Bug

GitHub Issues: https://github.com/repinboris312-ux/radio-app-2026/issues/new

Include:
- Title (concise description)
- Description (detailed explanation)
- Steps to reproduce
- Expected behavior
- Actual behavior
- Screenshots/logs
- System info (OS, browser, app version)
