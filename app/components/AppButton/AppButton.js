import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import defaultStyles from '../../config/defaultStyles';
import AppButtonStyles from './AppButtonStyles';

const AppButton = ({ title, onPress, color }) => {
  return (
    <TouchableOpacity
      style={[
        AppButtonStyles.button,
        { backgroundColor: color ? color : defaultStyles.colors.danger },
      ]}
      onPress={onPress}
    >
      <Text style={AppButtonStyles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

export default AppButton;
