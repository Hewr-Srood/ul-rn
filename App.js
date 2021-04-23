import React from 'react';
import { Platform, StatusBar, View, StyleSheet } from 'react-native';
import { hasNotch } from 'react-native-device-info';
import Card from './app/components/Card/Card';
import WelcomeScreen from './app/screens/WelcoemScreen/WelcomeScreen';

const App = () => (
  <>
    <StatusBar
      backgroundColor="transparent"
      translucent={true}
      barStyle="dark-content"
      style={{ styles }}
    />
    <View style={[styles.app, { backgroundColor: '#f8f4f4', padding: 20 }]}>
      <Card
        title="Red Jacked for sale"
        subTitle="$100"
        image={require('./app/assets/jacket.jpg')}
      />
    </View>
  </>
);
const styles = StyleSheet.create({
  app: {
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight + 20 : 0,
  },
});
export default App;
