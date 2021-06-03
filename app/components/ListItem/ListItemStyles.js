import { StyleSheet } from 'react-native';
import deafultStyles from '../../config/deafultStyles';

const ListItemStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 15,
    backgroundColor: deafultStyles.colors.white,
  },
  userContainer: {
    marginVertical: 40,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 37,
  },
  detailsContainer: {
    marginLeft: 10,
    justifyContent: 'center',
  },
  title: {
    fontWeight: '500',
  },
  subTtile: {
    color: deafultStyles.colors.medium,
  },
});
export default ListItemStyles;
