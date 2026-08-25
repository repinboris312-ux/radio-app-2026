# INSTALLATION & BUILD GUIDE

## System Requirements

### Desktop (Windows, macOS, Linux)
- Node.js 14+ or higher
- npm 6+ or yarn
- 500MB free disk space
- Modern web browser (Chrome, Firefox, Safari, Edge)

### Mobile (Android)
- Android 8.0 or higher
- 100MB free storage
- Internet connection for streaming

## Installation Steps

### 1. Install Node.js

**Windows & macOS:**
- Download from https://nodejs.org/ (LTS version recommended)
- Run installer and follow setup wizard
- Verify installation:
  ```bash
  node --version
  npm --version
  ```

**Linux (Ubuntu/Debian):**
```bash
sudo apt-get update
sudo apt-get install nodejs npm
```

### 2. Clone or Download Repository

```bash
git clone https://github.com/repinboris312-ux/radio-app-2026.git
cd radio-app-2026
```

### 3. Install Dependencies

```bash
npm install
```

This will install all required packages listed in `package.json`.

## Running the Application

### Development Mode (Web)

```bash
npm run react-start
```

Application will open at `http://localhost:3000`

### Desktop Application (Electron)

#### Windows
```bash
npm run dev
```

#### macOS
```bash
npm run dev
```

#### Linux
```bash
npm run dev
```

## Building for Production

### Build Web Version

```bash
npm run react-build
```

Output: `/build` directory

### Build Desktop Installer

#### Windows (EXE)
```bash
npm run electron-build
```
Output: `dist/Electronic-Radio-Setup.exe`

#### macOS (DMG)
```bash
npm run electron-build
```
Output: `dist/Electronic-Radio.dmg`

#### Linux (AppImage/DEB)
```bash
npm run electron-build
```
Output: `dist/electronic-radio.AppImage` or `.deb`

## Building Android APK

### Prerequisites
- Android Studio installed
- Android SDK
- JDK 11+
- Capacitor CLI

### Steps

```bash
# Install Capacitor
npm install -g @capacitor/cli

# Build web assets
npm run react-build

# Initialize Capacitor project
npx cap init

# Add Android platform
npx cap add android

# Copy web assets to Android
npx cap copy

# Open Android Studio
npx cap open android
```

In Android Studio:
1. Build > Build Bundle(s)/APK(s) > Build APK(s)
2. Select "Release" build type
3. Wait for build to complete
4. APK will be in `android/app/release/app-release.apk`

## Installing on Devices

### Windows/macOS/Linux
Double-click the installer file and follow the setup wizard.

### Android

**Option 1: Direct Installation**
1. Enable "Unknown Sources" in Settings > Security
2. Transfer APK to device via USB
3. Open file manager and tap the APK
4. Tap "Install"

**Option 2: Via ADB**
```bash
adb install app-release.apk
```

**Option 3: Play Store** (After publishing)
Search "Electronic Radio" in Google Play Store and tap Install

## Configuration

### Environment Variables

Create `.env.local` file:

```
REACT_APP_API_URL=http://localhost:5000
REACT_APP_SHOUTCAST_API_KEY=your_key_here
REACT_APP_VERSION=1.0.0
REACT_APP_ENVIRONMENT=production
```

## Troubleshooting

### Issue: "npm: command not found"
**Solution:** Reinstall Node.js or add npm to PATH

### Issue: "Port 3000 already in use"
**Solution:** Kill process or use different port:
```bash
npm start -- --port 3001
```

### Issue: Audio not playing
**Solution:** Check browser/device audio permissions and CORS settings

### Issue: Stations not loading
**Solution:** 
- Check internet connection
- Verify API server is running: `node src/server.js`
- Check browser console for errors (F12)

### Issue: APK build fails
**Solution:**
- Ensure Android SDK is installed
- Update Gradle: `gradle wrapper --gradle-version latest`
- Check Java version: `java -version` (should be 11+)

## Support

For issues and feature requests:
- GitHub Issues: https://github.com/repinboris312-ux/radio-app-2026/issues
- Email: repinboris312@gmail.com

## License

MIT License - See LICENSE file for details
