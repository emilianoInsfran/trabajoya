import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'app-test',
  webDir: 'www',
  server: {
    androidScheme: 'https'
  },
  cordova: {
    preferences: {
      ScrollEnabled: 'false',
      BackupWebStorage: 'none',
      SplashMaintainAspectRatio: 'true',
      FadeSplashScreenDuration: '300',
      SplashShowOnlyFirstTime: 'false',
      SplashScreen: 'screen',
      SplashScreenDelay: '3000',
      orientation: 'portrait',
      loadUrlTimeoutValue: '70000',
      webviewbounce: 'false',
      UIWebViewBounce: 'false',
      DisallowOverscroll: 'true',
      AutoHideSplashScreen: 'true',
      ShowSplashScreen: 'true',
      StatusBarOverlaysWebView: 'false',
      StatusBarBackgroundColor: '#000000',
      'android-minSdkVersion': '22',
      'android-targetSdkVersion': '33'
    }
  }
};

export default config;
