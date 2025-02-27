/**
 * @format
 */
import messaging from '@react-native-firebase/messaging';
import {AppRegistry} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';
import { FirebaseApp, initializeApp,getApp } from '@react-native-firebase/app';

  initializeApp(); // If not, initialize it

messaging().setBackgroundMessageHandler(async remoteMessage => {
    console.log('Message received in background:', remoteMessage);
  });
AppRegistry.registerComponent(appName, () => App);
