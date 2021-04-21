import { Platform, StyleSheet } from 'react-native';

const AppTextStyles = StyleSheet.create({
  text: {
    fontSize: 18,
    fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Avenir',
  },
});
export default AppTextStyles;
