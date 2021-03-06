import { StyleSheet } from 'react-native';
import defaultStyles from '../../config/defaultStyles';

const ListItemStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    backgroundColor: defaultStyles.colors.white,
  },
  userContainer: {
    marginVertical: 40,
  },
  image: {
    alignSelf: 'flex-start',
    width: 70,
    height: 70,
    borderRadius: 37,
  },
  detailsContainer: {
    flex: 1,
    marginLeft: 10,
    justifyContent: 'center',
  },
  title: {
    fontWeight: '500',
  },
  subTtile: {
    color: defaultStyles.colors.medium,
  },
});
export default ListItemStyles;
