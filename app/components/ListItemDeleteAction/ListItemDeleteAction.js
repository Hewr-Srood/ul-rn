import React from 'react';
import { Pressable } from 'react-native';
import { Icon } from 'react-native-elements';
import ListItemDeleteActionStyles from './ListItemDeleteActionStyles';

const ListItemDeleteAction = ({ onPress }) => {
  return (
    <Pressable onPress={onPress} style={ListItemDeleteActionStyles.container}>
      <Icon
        type="material-community"
        name="trash-can"
        size={32}
        color="white"
      />
    </Pressable>
  );
};

export default ListItemDeleteAction;
