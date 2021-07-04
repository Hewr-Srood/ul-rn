import React from 'react';
import { View, StyleSheet } from 'react-native';
import deafultStyles from '../config/defaultStyles';

const ListItemSeperator = () => {
  return <View style={styles.seperator} />;
};
const styles = StyleSheet.create({
  seperator: {
    width: '100%',
    height: 1,
    backgroundColor: deafultStyles.colors.light,
  },
});
export default ListItemSeperator;
