import { Platform, StyleSheet } from 'react-native';

const AppTextStyles = StyleSheet.create({
  text: {
    fontSize: 16,
    fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Avenir',
  },
});
export default AppTextStyles;
