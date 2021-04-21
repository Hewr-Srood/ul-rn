import { StyleSheet } from 'react-native';

const WelcomeScreenStyles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  logoContainer: { position: 'absolute', top: '20%', alignItems: 'center' },
  tagLine: {
    fontSize: 25,
    fontWeight: 'bold',
    paddingVertical: 20,
  },
  logo: {
    width: 100,
    height: 100,
  },
  buttonsContainer: {
    padding: 20,
    width: '100%',
  },
});
export default WelcomeScreenStyles;
