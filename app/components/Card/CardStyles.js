import { StyleSheet } from 'react-native';
import deafultStyles from '../../config/deafultStyles';

const CardStyles = StyleSheet.create({
  card: {
    borderRadius: 15,
    backgroundColor: deafultStyles.colors.white,
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
    color: deafultStyles.colors.secondary,
    fontWeight: 'bold',
  },
});
export default CardStyles;
