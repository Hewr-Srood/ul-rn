import { StyleSheet } from 'react-native';
import colors from '../../config/colors';

const WelcomeScreenStyles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  logoContainer: { position: 'absolute', top: '40%', alignItems: 'center' },
  logo: {
    width: 100,
    height: 100,
  },
  loginBtn: {
    width: '100%',
    height: 70,
    backgroundColor: colors.primary,
  },
  registerBtn: {
    width: '100%',
    height: 70,
    backgroundColor: colors.secondary,
  },
});
export default WelcomeScreenStyles;
