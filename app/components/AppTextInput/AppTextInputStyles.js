import { StyleSheet } from 'react-native';
import defaultStyles from '../../config/deafultStyles';

const AppTextInputStyles = StyleSheet.create({
  container: {
    backgroundColor: defaultStyles.colors.light,
    borderRadius: 25,
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    padding: 15,
    marginVertical: 10,
  },
  icon: {
    marginRight: 10,
  },
  textInput: defaultStyles.text,
});
export default AppTextInputStyles;
