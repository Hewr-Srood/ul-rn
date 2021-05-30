import React from 'react';
import { View, FlatList } from 'react-native';
import CustomIcon from '../../components/CustomIcon/CustomIcon';
import ListItem from '../../components/ListItem/ListItem';
import ListItemSeperator from '../../components/ListItemSeperator';
import Screen from '../../components/Screen/Screen';
import colors from '../../config/colors';
import AcountScreenStyles from './AcountScreenStyles';
const menuItems = [
  {
    title: 'My Listings',
    icon: {
      name: 'format-list-bulleted',
      backgroundColor: colors.primary,
    },
  },
  {
    title: 'My Messages',
    icon: {
      name: 'email',
      backgroundColor: colors.secondary,
    },
  },
];
const AccountScreen = () => {
  return (
    <Screen style={AcountScreenStyles.screen}>
      <View style={AcountScreenStyles.container}>
        <ListItem
          title="Hewr Srood"
          subTitle="hewr_s@outlookc.com"
          image={require('../../assets/hewr.jpg')}
        />
      </View>
      <View style={AcountScreenStyles.container}>
        <FlatList
          data={menuItems}
          keyExtractor={(menuItem) => menuItem.title}
          ItemSeparatorComponent={ListItemSeperator}
          renderItem={({ item }) => (
            <ListItem
              title={item.title}
              IconComponent={
                <CustomIcon
                  name={item.icon.name}
                  backgroundColor={item.icon.backgroundColor}
                />
              }
            />
          )}
        />
      </View>
      <ListItem
        title="Log out"
        IconComponent={<CustomIcon backgroundColor="#ffe66d" name="logout" />}
      />
    </Screen>
  );
};

export default AccountScreen;
