import React from 'react';
import { View, Text } from 'react-native';
import AppText from './app/components/AppText/AppText';
import ViewImageScreen from './app/screens/ViewImageScreen';
import WelcomeScreen from './app/screens/WelcomeScreen';

const App = () => (
  <View styles={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <AppText>I Love RN</AppText>
  </View>
);
export default App;
