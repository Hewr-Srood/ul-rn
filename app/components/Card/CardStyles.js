import { StyleSheet } from 'react-native';
import defaultStyles from '../../config/defaultStyles';

const CardStyles = StyleSheet.create({
  card: {
    borderRadius: 15,
    backgroundColor: defaultStyles.colors.white,
    overflow: 'hidden',
    marginBottom: 20,
  },
  image: {
    width: '100%',
    height: 200,
  },
  detailsContainer: {
    padding: 20,
  },
  title: {
    marginBottom: 7,
  },
  subTitle: {
    color: defaultStyles.colors.secondary,
    fontWeight: 'bold',
  },
});
export default CardStyles;
