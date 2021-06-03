import React from 'react';
import { StatusBar, SafeAreaView } from 'react-native';
import { hasNotch } from 'react-native-device-info';
import AppTextInput from './app/components/AppTextInput/AppTextInput';
import Card from './app/components/Card/Card';
import CustomIcon from './app/components/CustomIcon/CustomIcon';
import ListItem from './app/components/ListItem/ListItem';
import Screen from './app/components/Screen/Screen';
import AccountScreen from './app/screens/AccountScreen/AccountScreen';
import DetailsListScreen from './app/screens/DetailsListScreen/DetailsListScreen';
import ListingsScreen from './app/screens/ListingsScreen/ListingsScreen';
import MessagesScreen from './app/screens/MessagesScreen/MessagesScreen';
import ViewImageScreen from './app/screens/ViewImageScreen/ViewImageScreen';

const App = () => (
  <>
    <StatusBar
      backgroundColor="transparent"
      translucent={true}
      barStyle="dark-content"
    />

    {/* <ListingsScreen /> */}
    <Screen>
      <AppTextInput placeholder="Username" icon="email" />
    </Screen>

    {/* <ListItem
        title="My title "
        // subTitle="My subtitle"
        IconComponent={
          <CustomIcon
            name="email"
            // size={50}
            // backgroundColor="red"
            // iconColor="#fff"
          />
        }
      /> */}
  </>
);

export default App;
