import { StyleSheet } from 'react-native';
import defaultStyles from '../../../config/defaultStyles';

const AppPickerStyles = StyleSheet.create({
  container: {
    backgroundColor: defaultStyles.colors.light,
    borderRadius: 25,
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 15,
    minHeight: 60,
    marginVertical: 10,
  },
  closeBtn: {
    alignItems: 'center',
  },
  closeText: {
    paddingVertical: 20,
    fontSize: 18,
    color: defaultStyles.colors.danger,
  },
  icon: {
    marginRight: 10,
  },
  placeholder: {
    color: defaultStyles.colors.medium,
    flex: 1,
  },
  text: {
    flex: 1,
  },
});
export default AppPickerStyles;
