import React from 'react';
import { StatusBar, SafeAreaView } from 'react-native';
import { hasNotch } from 'react-native-device-info';
import Card from './app/components/Card/Card';
import DetailsListScreen from './app/screens/DetailsListScreen/DetailsListScreen';
import MessagesScreen from './app/screens/MessagesScreen/MessagesScreen';
import ViewImageScreen from './app/screens/ViewImageScreen/ViewImageScreen';

const App = () => (
  <>
    <StatusBar
      backgroundColor="transparent"
      translucent={true}
      barStyle="dark-content"
    />
    <MessagesScreen />
  </>
);

export default App;
