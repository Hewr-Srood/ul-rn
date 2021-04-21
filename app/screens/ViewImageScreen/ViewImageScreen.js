import React from 'react';
import { Image, View } from 'react-native';
import ViewImageScreenStyles from './ViewImageScreenStyles';

const ViewImageScreen = () => {
  return (
    <View style={ViewImageScreenStyles.container}>
      <View
        style={[ViewImageScreenStyles.closeIcon, ViewImageScreenStyles.icon]}
      />
      <View
        style={[ViewImageScreenStyles.icon, ViewImageScreenStyles.deleteIcon]}
      />
      <Image
        resizeMode="contain"
        style={ViewImageScreenStyles.image}
        source={require('../../assets/chair.jpg')}
      />
    </View>
  );
};

export default ViewImageScreen;
