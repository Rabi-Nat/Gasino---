import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.gasino.app',
  appName: 'Gasino',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;
