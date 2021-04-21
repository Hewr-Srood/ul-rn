import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import AppButtonStyles from './AppButtonStyles';

const Button = ({ title, onPress }) => {
  return (
    <TouchableOpacity style={AppButtonStyles.button} onPress={onPress}>
      <Text style={AppButtonStyles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;
