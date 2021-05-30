/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View } from 'react-native';
import { Icon } from 'react-native-elements';
const CustomIcon = ({
  name,
  size = 40,
  backgroundColor = '#000',
  iconColor = '#fff',
}) => {
  return (
    <View
      style={{
        width: size,
        height: size,
        borderRadius: size / 2,
        backgroundColor: backgroundColor,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Icon
        type="material-community"
        name={name}
        color={iconColor}
        size={size * 0.5}
      />
    </View>
  );
};

export default CustomIcon;
