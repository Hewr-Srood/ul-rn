import { StyleSheet, StatusBar } from 'react-native';

const ScreenStyles = StyleSheet.create({
  screen: {
    paddingTop: StatusBar.currentHeight,
    flex: 1,
  },
  view: {
    flex: 1,
  },
});
export default ScreenStyles;
