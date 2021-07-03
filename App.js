import React, { useState } from 'react';
import { StatusBar, SafeAreaView } from 'react-native';
import { hasNotch } from 'react-native-device-info';
import AppPicker from './app/components/AppPicker/AppPicker';
import AppTextInput from './app/components/AppTextInput/AppTextInput';
import Card from './app/components/Card/Card';
import CustomIcon from './app/components/CustomIcon/CustomIcon';
import ListItem from './app/components/ListItem/ListItem';
import Screen from './app/components/Screen/Screen';
import AccountScreen from './app/screens/AccountScreen/AccountScreen';
import DetailsListScreen from './app/screens/DetailsListScreen/DetailsListScreen';
import ListingsScreen from './app/screens/ListingsScreen/ListingsScreen';
import LoginScreen from './app/screens/LoginScreen/LoginScreen';
import MessagesScreen from './app/screens/MessagesScreen/MessagesScreen';
import ViewImageScreen from './app/screens/ViewImageScreen/ViewImageScreen';

const categories = [
  {
    label: 'Furnitue',
    value: 1,
  },
  {
    label: 'Clothing',
    value: 2,
  },

  {
    label: 'Cameras',
    value: 3,
  },

  {
    label: 'Laptops',
    value: 4,
  },
];
const App = () => {
  const [category, setCategory] = useState(categories[0]);
  return (
    <>
      <StatusBar
        backgroundColor="transparent"
        translucent={true}
        barStyle="dark-content"
      />
      <LoginScreen />
      {/* <ListingsScreen /> */}
      {/* <Screen>
        <AppPicker
          selectedItem={category}
          onSelectItem={(item) => setCategory(item)}
          items={categories}
          placeholder="category"
          icon="apps"
        />
        <AppTextInput placeholder="Email" icon="email" />
      </Screen> */}

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
};

export default App;
