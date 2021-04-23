import React from 'react';
import { Platform, StatusBar, View, StyleSheet } from 'react-native';
import { hasNotch } from 'react-native-device-info';
import Card from './app/components/Card/Card';
import DetailsListScreen from './app/screens/DetailsListScreen/DetailsListScreen';
import WelcomeScreen from './app/screens/WelcoemScreen/WelcomeScreen';

const App = () => (
  <>
    <StatusBar
      backgroundColor="transparent"
      translucent={true}
      barStyle="dark-content"
      style={styles.app}
    />
    <View>
      <DetailsListScreen />
    </View>
  </>
);
const styles = StyleSheet.create({
  app: {
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight + 20 : 0,
  },
});
export default App;
