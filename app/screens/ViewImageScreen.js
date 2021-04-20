import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import colors from '../config/colors';

const ViewImageScreen = () => {
  return (
    <View style={styles.container}>
      <View style={[styles.closeIcon, styles.icon]} />
      <View style={[styles.icon, styles.deleteIcon]} />
      <Image
        resizeMode="contain"
        style={styles.image}
        source={require('../assets/chair.jpg')}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.black,
    flex: 1,
  },
  icon: {
    width: 50,
    height: 50,
    top: 40,
    position: 'absolute',
  },
  closeIcon: {
    backgroundColor: colors.priary,
    left: 30,
  },
  deleteIcon: {
    backgroundColor: colors.secondary,
    right: 30,
  },
  image: {
    width: '100%',
    height: '100%',
  },
});
export default ViewImageScreen;
