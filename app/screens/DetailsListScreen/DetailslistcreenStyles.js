import { StyleSheet } from 'react-native';
import colors from '../../config/colors';
const DetailsListScreenStyles = StyleSheet.create({
  image: {
    width: '100%',
    height: 300,
  },
  detailsContainer: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: '500',
  },
  price: {
    color: colors.secondary,
    fontWeight: 'bold',
    fontSize: 24,
    marginVertical: 10,
  },
  userContainer: {
    marginVertical: 40,
  },
});
export default DetailsListScreenStyles;
