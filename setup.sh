#!/bin/bash

echo "========================================"
echo "Electronic Radio App - Full Setup Script"
echo "========================================"
echo ""

# Check Node.js installation
if ! command -v node &> /dev/null; then
    echo "❌ Node.js not found. Please install Node.js 14+ from https://nodejs.org"
    exit 1
fi

echo "✅ Node.js version: $(node --version)"
echo "✅ npm version: $(npm --version)"
echo ""

# Install dependencies
echo "📦 Installing dependencies..."
npm install
if [ $? -ne 0 ]; then
    echo "❌ Failed to install dependencies"
    exit 1
fi
echo "✅ Dependencies installed"
echo ""

# Build React app
echo "🔨 Building React application..."
npm run react-build
if [ $? -ne 0 ]; then
    echo "❌ Failed to build React app"
    exit 1
fi
echo "✅ React app built successfully"
echo ""

# Build Electron
echo "🖥️  Building Electron application..."
npm run electron-build
if [ $? -ne 0 ]; then
    echo "❌ Failed to build Electron app"
    exit 1
fi
echo "✅ Electron app built successfully"
echo ""

echo "========================================"
echo "✅ Build completed successfully!"
echo "========================================"
echo ""
echo "📁 Installers available in dist/ folder:"
if [[ "$OSTYPE" == "darwin"* ]]; then
    echo "   - dist/Electronic-Radio.dmg (macOS)"
elif [[ "$OSTYPE" == "linux-gnu"* ]]; then
    echo "   - dist/electronic-radio.AppImage (Linux)"
    echo "   - dist/electronic-radio.deb (Linux Debian)"
elif [[ "$OSTYPE" == "msys" ]] || [[ "$OSTYPE" == "cygwin" ]]; then
    echo "   - dist/Electronic-Radio-Setup.exe (Windows)"
    echo "   - dist/Electronic Radio-1.0.0.exe (Windows Portable)"
fi
echo ""
echo "🎉 Ready to use! Start with: npm run dev"
