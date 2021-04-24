import { StyleSheet } from 'react-native';
import colors from '../../config/colors';

const ViewImageScreenStyles = StyleSheet.create({
  container: {
    backgroundColor: colors.black,
  },
  icon: {
    top: 40,
    position: 'absolute',
  },
  closeIcon: {
    left: 30,
  },
  deleteIcon: {
    right: 30,
  },
  image: {
    width: '100%',
    height: '100%',
  },
});
export default ViewImageScreenStyles;
