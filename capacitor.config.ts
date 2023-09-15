import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.example.app',
  appName: 'front-end',
  webDir: 'dist/Front-End',
  server: {
    androidScheme: 'https'
  }
};

export default config;
