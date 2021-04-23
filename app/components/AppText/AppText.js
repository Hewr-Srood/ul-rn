import React from 'react';
import { Text } from 'react-native';
import AppTextStyles from './AppTextStyles';

const AppText = ({ children, styles }) => {
  return <Text style={[AppTextStyles.text, styles]}>{children}</Text>;
};

export default AppText;
