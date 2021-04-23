import React from 'react';
import { View, Image } from 'react-native';
import AppText from '../AppText/AppText';
import ListItemStyles from './ListItemStyles';

const ListItem = ({ image, title, subTitle }) => {
  return (
    <View style={ListItemStyles.container}>
      <Image style={ListItemStyles.image} source={image} />
      <View>
        <AppText styles={ListItemStyles.title}>{title}</AppText>
        <AppText styles={ListItemStyles.subTtile}> {subTitle}</AppText>
      </View>
    </View>
  );
};

export default ListItem;
