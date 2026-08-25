# Android Build Configuration

## Capacitor Configuration

```json
{
  "appId": "com.electronicradio.app",
  "appName": "Electronic Radio",
  "webDir": "build",
  "bundledWebRuntime": false,
  "plugins": {
    "SplashScreen": {
      "launchShowDuration": 0
    }
  },
  "server": {
    "androidScheme": "https"
  }
}
```

## Android Manifest (AndroidManifest.xml)

```xml
<?xml version='1.0' encoding='utf-8'?>
<manifest xmlns:android="http://schemas.android.com/apk/res/android"
    package="com.electronicradio.app">

    <uses-permission android:name="android.permission.INTERNET" />
    <uses-permission android:name="android.permission.ACCESS_NETWORK_STATE" />
    <uses-permission android:name="android.permission.ACCESS_WIFI_STATE" />
    <uses-permission android:name="android.permission.MODIFY_AUDIO_SETTINGS" />
    <uses-permission android:name="android.permission.RECORD_AUDIO" />
    <uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE" />
    <uses-permission android:name="android.permission.READ_EXTERNAL_STORAGE" />

    <application
        android:allowBackup="true"
        android:icon="@mipmap/ic_launcher"
        android:label="@string/app_name"
        android:roundIcon="@mipmap/ic_launcher_round"
        android:supportsRtl="true"
        android:theme="@style/AppTheme"
        android:usesCleartextTraffic="true">

        <activity
            android:name=".MainActivity"
            android:label="@string/app_name"
            android:theme="@style/AppTheme.NoActionBar"
            android:configChanges="orientation|keyboardHidden|keyboard|screenSize|locale"
            android:exported="true">
            <intent-filter>
                <action android:name="android.intent.action.MAIN" />
                <category android:name="android.intent.category.LAUNCHER" />
            </intent-filter>
        </activity>

    </application>

</manifest>
```

## Gradle Configuration (build.gradle)

```gradle
apply plugin: 'com.android.application'

android {
    compileSdkVersion 33
    defaultConfig {
        applicationId "com.electronicradio.app"
        minSdkVersion 24
        targetSdkVersion 33
        versionCode 1
        versionName "1.0.0"
    }
    buildTypes {
        release {
            minifyEnabled true
            proguardFiles getDefaultProguardFile('proguard-android.txt'), 'proguard-rules.pro'
        }
    }
}

dependencies {
    implementation fileTree(dir: 'libs', include: ['*.jar'])
    implementation 'com.getcapacitor:android:5.0.0'
    implementation 'androidx.appcompat:appcompat:1.5.1'
    implementation 'androidx.constraintlayout:constraintlayout:2.1.4'
}
```

## Build Instructions

### Command Line Build

```bash
# Clean build
cd android
./gradlew clean

# Build release APK
./gradlew assembleRelease

# Build and sign APK
./gradlew assembleRelease -Psigning
```

Output APK will be at: `app/release/app-release.apk`

### Android Studio Build

1. Open Android Studio
2. File > Open > Select `android` folder
3. Build > Build Bundle(s)/APK(s) > Build APK(s)
4. Choose Release variant
5. Build completes in ~5-10 minutes

## APK Signing

### Generate Keystore

```bash
keytool -genkey -v -keystore release.keystore -keyalg RSA -keysize 2048 -validity 10000 -alias electronicradio
```

### Sign APK

```bash
jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 \
  -keystore release.keystore \
  app/release/app-release.apk electronicradio
```

## Publishing to Play Store

1. Create Google Play Developer account ($25 one-time fee)
2. Sign APK with release keystore
3. Upload to Google Play Console
4. Fill app details, screenshots, description
5. Submit for review (24-48 hours)

## APK Size Optimization

```gradle
android {
    bundle {
        language.enableSplit = true
        density.enableSplit = true
        abi.enableSplit = true
    }
}
```

This reduces APK size from ~100MB to ~50MB
