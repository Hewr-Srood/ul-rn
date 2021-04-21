import React from 'react';
import { Text } from 'react-native';
import AppTextStyles from './AppTextStyles';

const AppText = ({ children }) => {
  return <Text style={AppTextStyles.text}>{children}</Text>;
};

export default AppText;
