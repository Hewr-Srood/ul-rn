import React from 'react';
import { View, Image } from 'react-native';
import CardStyles from './CardStyles';
import AppText from '../AppText/AppText';

const Card = ({ title, subTitle, image }) => {
  return (
    <View style={CardStyles.card}>
      <Image style={CardStyles.image} source={image} />
      <View style={CardStyles.detailsContainer}>
        <AppText styles={CardStyles.title}>{title}</AppText>
        <AppText styles={CardStyles.subTitle}>{subTitle}</AppText>
      </View>
    </View>
  );
};

export default Card;
