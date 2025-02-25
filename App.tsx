

import React, { useEffect } from 'react';
import type { PropsWithChildren } from 'react';
import {
  Alert,
  Button,
  PermissionsAndroid,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import messaging from '@react-native-firebase/messaging';
import Clipboard from "@react-native-clipboard/clipboard";

function App(): React.JSX.Element {
  const getFcmToken = async () => {
    const token = await messaging().getToken();
    Clipboard.setString(token);
    Alert.alert("Copied!", "Text copied to clipboard");

    console.log('FCM Token:', token);
  }

  async function requestUserPermission() {
    await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS);
    const authStatus = await messaging().requestPermission();
    const enabled =
      authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
      authStatus === messaging.AuthorizationStatus.PROVISIONAL;

    if (enabled) {
      console.log('Notification permission granted.');
    }
  }

  useEffect(() => {
    requestUserPermission();
  }, [])

  return (
    <View style={{ marginTop: 50 }}>
      <Button
        onPress={getFcmToken}
        title="click"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />

    </View>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
