import { StyleSheet } from 'react-native';
import deafultStyles from '../../config/deafultStyles';

const AppButtonStyles = StyleSheet.create({
  button: {
    marginVertical: 10,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
    width: '100%',
  },
  title: {
    color: deafultStyles.colors.white,
    fontSize: 18,
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
});
export default AppButtonStyles;
