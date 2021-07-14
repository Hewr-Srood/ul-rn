import React from 'react';
import { TouchableOpacity, View, Dimensions } from 'react-native';
import { Icon } from 'react-native-elements';
import AppText from '../AppText/AppText';
import CategoryPickerItemStyles from './CategoryPickerItemStyles';
const CategoryPickerItem = ({ item, label, onPress }) => {
  return (
    <View style={CategoryPickerItemStyles.container}>
      <Icon
        style={{
          borderRadius: Dimensions.get('screen').width,
          justifyContent: 'center',
          alignItems: 'center',
        }}
        type="material-community"
        width={80}
        height={80}
        backgroundColor={item.backgroundColor}
        name={item.icon}
        color="#fff"
        size={52}
      />
      <AppText styles={CategoryPickerItemStyles.label}>{label}</AppText>
    </View>
  );
};

export default CategoryPickerItem;
