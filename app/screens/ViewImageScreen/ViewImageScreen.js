import React from 'react';
import { Image, View } from 'react-native';
import ViewImageScreenStyles from './ViewImageScreenStyles';
import { Icon } from 'react-native-elements';

const ViewImageScreen = () => {
  return (
    <>
      <View style={ViewImageScreenStyles.container}>
        <View
          style={[ViewImageScreenStyles.closeIcon, ViewImageScreenStyles.icon]}
        >
          <Icon name="close" color="white" size={35} />
        </View>
        <View
          style={[ViewImageScreenStyles.icon, ViewImageScreenStyles.deleteIcon]}
        >
          <Icon name="delete" color="red" size={35} />
        </View>
        <Image
          resizeMode="contain"
          style={ViewImageScreenStyles.image}
          source={require('./../../assets/chair.jpg')}
        />
      </View>
    </>
  );
};

export default ViewImageScreen;
