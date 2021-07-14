import { StyleSheet } from 'react-native';
import defaultStyles from '../../config/defaultStyles';

const AppTextInputStyles = StyleSheet.create({
  container: {
    backgroundColor: defaultStyles.colors.light,
    borderRadius: 25,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    minHeight: 60,
    marginVertical: 10,
  },
  icon: {
    marginRight: 10,
  },
  textInput: defaultStyles.text,
});
export default AppTextInputStyles;
