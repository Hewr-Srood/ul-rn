import React from 'react';
import { View, Image } from 'react-native';
import CardStyles from './CardStyles';
import AppText from '../AppText/AppText';

const Card = ({ title, subTitle, image }) => {
  return (
    <View style={CardStyles.card}>
      <Image style={CardStyles.image} source={image} />
      <View style={CardStyles.detailsContainer}>
        <AppText styles={CardStyles.title} numberOfLines={1}>
          {title}
        </AppText>
        <AppText styles={CardStyles.subTitle} numberOfLines={2}>
          {subTitle}
        </AppText>
      </View>
    </View>
  );
};

export default Card;
