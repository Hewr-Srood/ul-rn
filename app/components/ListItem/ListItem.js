import React from 'react';
import { View, Image, TouchableHighlight } from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import colors from '../../config/colors';
import AppText from '../AppText/AppText';

import ListItemStyles from './ListItemStyles';

const ListItem = ({ image, title, subTitle, onPress, renderRightActions }) => {
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight onPress={onPress} underlayColor={colors.light}>
        <View style={ListItemStyles.container}>
          <Image style={ListItemStyles.image} source={image} />
          <View>
            <AppText styles={ListItemStyles.title}>{title}</AppText>
            <AppText styles={ListItemStyles.subTtile}> {subTitle}</AppText>
          </View>
        </View>
      </TouchableHighlight>
    </Swipeable>
  );
};

export default ListItem;
