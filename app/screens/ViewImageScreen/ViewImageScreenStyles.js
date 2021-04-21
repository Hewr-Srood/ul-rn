import { StyleSheet } from 'react-native';
import colors from '../../config/colors';

const ViewImageScreenStyles = StyleSheet.create({
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
    backgroundColor: colors.primary,
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
export default ViewImageScreenStyles;
