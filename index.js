/**
 * @format
 */
import messaging from '@react-native-firebase/messaging';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import { FirebaseApp, initializeApp } from '@react-native-firebase/app';

  initializeApp(); // Ensure Firebase is initialized


messaging().setBackgroundMessageHandler(async remoteMessage => {
    console.log('Message received in background:', remoteMessage);
  });
AppRegistry.registerComponent(appName, () => App);
