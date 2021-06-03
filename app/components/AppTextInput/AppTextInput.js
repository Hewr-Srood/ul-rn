import React from 'react';
import { TextInput } from 'react-native';
import { View } from 'react-native';
import { Icon } from 'react-native-elements';
import deafultStyles from '../../config/deafultStyles';

import AppTextInputStyles from './AppTextInputStyles';

const AppTextInput = ({ icon, ...inputProps }) => {
  return (
    <View style={AppTextInputStyles.container}>
      {icon && (
        <Icon
          color={deafultStyles.colors.medium}
          style={AppTextInputStyles.icon}
          type="material-community"
          name={icon}
          size={20}
        />
      )}
      <TextInput style={AppTextInputStyles.textInput} {...inputProps} />
    </View>
  );
};

export default AppTextInput;
