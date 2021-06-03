import React from 'react';
import { TouchableOpacity } from 'react-native';
import AppText from '../AppText/AppText';
import PickerItemStyles from './PickerItemStyles';

const PickerItem = ({ label, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <AppText styles={PickerItemStyles.text}>{label}</AppText>
    </TouchableOpacity>
  );
};

export default PickerItem;
