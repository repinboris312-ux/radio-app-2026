# Electronic Radio - Desktop & Mobile App

**🎵 Stream 200+ Electronic Music Stations Worldwide 🎵**

![Version](https://img.shields.io/badge/version-1.0.0-blue)
![License](https://img.shields.io/badge/license-MIT-green)
![Platform](https://img.shields.io/badge/platform-Windows%20%7C%20macOS%20%7C%20Linux%20%7C%20Android-brightgreen)

## 🚀 Features

### Current (2026)
- 🌍 **200+ Live Radio Stations** from around the world
- 🎧 **Multiple Genres**: House, Techno, Trance, Drum & Bass, Dubstep, Ambient, and more
- 🎯 **Smart Filtering**: By genre, country, and audio quality
- 💚 **Favorites Management**: Save your favorite stations
- 🔍 **Advanced Search**: Find stations by name, country, or genre
- 🎛️ **Audio Controls**: Volume adjustment, quality selection (96-320 kbps)
- 📊 **Stream Statistics**: Listener count, uptime, bitrate info
- 🌓 **Dark/Light Theme**: Personalized appearance
- 💾 **Recently Played**: Auto-saves listening history (50 stations)
- 📱 **Cross-Platform**: Windows, macOS, Linux, Android
- ⚡ **Real-time Streaming**: Low-latency audio playback
- 🎨 **Modern UI**: Smooth animations with Framer Motion

### Future (2034 Predictions)
- 🤖 **AI Recommendations**: Machine learning-powered station suggestions
- 🧠 **Neural Playlists**: AI-generated custom playlists
- 👥 **Social Features**: Share stations, ratings, comments
- 📈 **Listening Analytics**: Track your listening habits
- 🔊 **Spatial Audio & Dolby Atmos**: Immersive sound
- 🌐 **Metaverse Integration**: Listen in virtual worlds
- ⛓️ **Blockchain Rewards**: Earn cryptocurrency for listening
- 🏆 **Gamification**: Achievements, leaderboards, badges
- 📡 **5G/6G Optimization**: Ultra-fast streaming
- 🎨 **AR Visualizations**: Augmented reality music visualizers

## 📥 Download

### Installers
- **Windows**: [Electronic-Radio-Setup.exe](https://github.com/repinboris312-ux/radio-app-2026/releases)
- **macOS**: [Electronic-Radio.dmg](https://github.com/repinboris312-ux/radio-app-2026/releases)
- **Linux**: [electronic-radio.AppImage](https://github.com/repinboris312-ux/radio-app-2026/releases)
- **Android**: [electronic-radio.apk](https://github.com/repinboris312-ux/radio-app-2026/releases)

### Play Store
- Google Play: [Electronic Radio](https://play.google.com/store/apps/details?id=com.electronicradio.app)
- Apple App Store: Coming Soon

## 🛠️ Quick Start

### Prerequisites
- Node.js 14+
- npm or yarn

### Installation

```bash
# Clone repository
git clone https://github.com/repinboris312-ux/radio-app-2026.git
cd radio-app-2026

# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run electron-build
```

## 📖 Documentation

- [Installation Guide](./INSTALLATION.md) - Detailed setup instructions
- [Android Build Guide](./ANDROID_BUILD.md) - APK building and deployment
- [Troubleshooting](./TROUBLESHOOTING.md) - Common issues and solutions
- [Contributing Guide](./CONTRIBUTING.md) - How to contribute

## 📋 Project Structure

```
radio-app-2026/
├── public/                 # Static assets
├── src/
│   ├── components/         # React components (Player, Navbar, StationList)
│   ├── pages/             # Page components (Home, Favorites, Search, Settings)
│   ├── stores/            # Zustand state management (Player, Favorites)
│   ├── services/          # API services
│   ├── data/              # Station database (150+ stations)
│   ├── styles/            # Tailwind CSS styles
│   ├── electron/          # Electron main process
│   └── App.jsx            # Main app component
├── android/               # Android/Capacitor config
├── dist/                  # Build output
├── package.json           # Dependencies and scripts
├── INSTALLATION.md        # Setup guide
├── ANDROID_BUILD.md       # Android build guide
├── TROUBLESHOOTING.md     # Troubleshooting
└── README.md              # This file
```

## 🎯 Technologies

### Frontend
- **React 18** - UI library
- **React Router** - Navigation
- **Tailwind CSS** - Styling
- **Zustand** - State management
- **Framer Motion** - Animations
- **React Icons** - Icons
- **wavesurfer.js** - Audio waveform visualization

### Desktop
- **Electron 27** - Desktop application framework
- **Electron Builder** - Packaging and distribution

### Mobile
- **Capacitor** - Cross-platform mobile development
- **Android SDK** - Android support

### Backend
- **Express.js** - API server
- **Node.js** - Runtime
- **CORS** - Cross-origin requests

### Build & Development
- **Webpack** - Module bundler (via Create React App)
- **Babel** - JavaScript transpiler
- **ESLint** - Code linting
- **npm** - Package manager

## 📊 Radio Stations Database

**150+ Live Stations** including:

### By Genres
- 🏠 House (Deep House, Tech House, Progressive House)
- 🔊 Techno (Minimal Techno, Darkside Techno, Berlin)
- 🎵 Trance (Uplifting, Progressive, Psytrance)
- 🥁 Drum & Bass (Liquid, Neurofunk, Liquid Funk)
- 📢 Dubstep (Chillstep, Bass, Wobble)
- 🌊 Ambient (Downtempo, Chill, Lounge)
- 🎹 Electronic (Synthwave, Electro, Synth)
- 🌴 Tropical House
- 🎼 And more...

### By Countries
- 🇩🇪 Germany (Berlin, Munich, Hamburg)
- 🇳🇱 Netherlands (Amsterdam, Rotterdam, Eindhoven)
- 🇬🇧 UK (London, Manchester, Glasgow)
- 🇫🇷 France (Paris, Lyon, Marseille)
- 🇸🇪 Sweden (Stockholm, Gothenburg)
- 🇪🇸 Spain (Ibiza, Barcelona, Madrid)
- 🇮🇹 Italy (Rome, Milan, Naples)
- 🇺🇸 USA (New York, Los Angeles, Chicago)
- 🇧🇷 Brazil (Rio, São Paulo)
- 🇮🇳 India (Mumbai, Goa, Delhi)
- 🇯🇵 Japan (Tokyo, Osaka)
- 🇦🇺 Australia (Sydney, Melbourne, Brisbane)
- And 20+ more countries worldwide

## 🎮 How to Use

1. **Launch App** - Open Electronic Radio on your device
2. **Browse Stations** - Browse by genre, country, or quality
3. **Search** - Use search bar to find specific stations
4. **Play** - Click play button or station card to stream
5. **Adjust Volume** - Use volume slider in player
6. **Add Favorites** - Click heart icon to save stations
7. **View Recently Played** - Check your listening history
8. **Configure Settings** - Customize audio quality and theme

## ⚙️ System Requirements

### Desktop
- **Windows**: Windows 10 or later
- **macOS**: macOS 10.13 or later
- **Linux**: Ubuntu 18.04+ or equivalent
- **RAM**: 512 MB minimum, 2 GB recommended
- **Disk Space**: 300 MB free
- **Internet**: Broadband connection required

### Mobile (Android)
- **OS**: Android 8.0 (API 26) or later
- **RAM**: 2 GB minimum, 4 GB recommended
- **Storage**: 100 MB free
- **Internet**: 4G/5G connection recommended

## 🔒 Privacy & Security

- ✅ No personal data collection
- ✅ No ads or tracking
- ✅ Open source (MIT License)
- ✅ Local storage for favorites
- ✅ HTTPS streaming support
- ✅ No account required

## 🚀 Performance

- ⚡ **Fast Loading**: < 2 seconds startup
- 📊 **Low Memory**: ~80-150 MB usage
- 🔋 **Battery Friendly**: Optimized for mobile
- 🌐 **Minimal Data**: Works on 3G+
- 🎯 **Responsive**: Smooth 60 FPS animations

## 💬 Support & Contact

- 📧 Email: repinboris312@gmail.com
- 🐛 GitHub Issues: [Report Bugs](https://github.com/repinboris312-ux/radio-app-2026/issues)
- 💡 Feature Requests: [Suggest Features](https://github.com/repinboris312-ux/radio-app-2026/issues/new)
- 📚 Documentation: [Read Docs](./INSTALLATION.md)

## 🤝 Contributing

We welcome contributions! See [CONTRIBUTING.md](./CONTRIBUTING.md) for guidelines.

### Quick Contribute

1. Fork repository
2. Create feature branch: `git checkout -b feature/amazing-feature`
3. Commit changes: `git commit -m 'feat: Add amazing feature'`
4. Push to branch: `git push origin feature/amazing-feature`
5. Open Pull Request

## 📜 License

MIT License - See [LICENSE](./LICENSE) file for details

## 🙏 Acknowledgments

- Radio station data from ShoutCast, Tunein, and other APIs
- Icons by React Icons
- UI inspiration from modern music streaming apps
- Community feedback and contributions

## 🎉 Roadmap

- [x] Desktop application (Electron)
- [x] Mobile application (Android)
- [x] 150+ radio stations
- [x] Search and filtering
- [x] Favorites management
- [ ] iOS app
- [ ] Playlist creation
- [ ] Station recommendations
- [ ] Audio equalizer
- [ ] Visualizer
- [ ] Offline mode
- [ ] Multi-language support

## ⭐ Show Your Support

If you like this project, please give it a star! ⭐

---

**Made with ❤️ by Electronic Radio Team**

Version 1.0.0 | Last Updated: August 2026
