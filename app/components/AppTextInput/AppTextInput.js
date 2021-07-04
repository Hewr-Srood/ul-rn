import React from 'react';
import { TextInput } from 'react-native';
import { View } from 'react-native';
import { Icon } from 'react-native-elements';
import defaultStyles from '../../config/defaultStyles';

import AppTextInputStyles from './AppTextInputStyles';

const AppTextInput = ({ icon, ...inputProps }) => {
  return (
    <View style={AppTextInputStyles.container}>
      {icon && (
        <Icon
          color={defaultStyles.colors.medium}
          style={AppTextInputStyles.icon}
          type="material-community"
          name={icon}
          size={20}
        />
      )}
      <TextInput
        placeholderTextColor={defaultStyles.colors.medium}
        style={AppTextInputStyles.textInput}
        {...inputProps}
      />
    </View>
  );
};

export default AppTextInput;
