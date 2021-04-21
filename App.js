import React from 'react';
import WelcomeScreen from './app/screens/WelcoemScreen/WelcomeScreen';
import AppText from './app/components/AppText/AppText';
import AppButton from './app/components/Button/AppButton';
import { View } from 'react-native';

const App = () => (
  <View style={{ flex: 1, justifyContent: 'center', alignContent: 'center' }}>
    <AppButton title="login" onPress={() => console.log('tapped')} />
  </View>
);

export default App;
