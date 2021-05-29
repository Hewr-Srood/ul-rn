import React from 'react';
import { Image, View } from 'react-native';
import ViewImageScreenStyles from './ViewImageScreenStyles';
import { Icon } from 'react-native-elements';
import Screen from '../../components/Screen/Screen';

const ViewImageScreen = () => {
  return (
    <Screen>
      <View style={ViewImageScreenStyles.container}>
        <View
          style={[ViewImageScreenStyles.closeIcon, ViewImageScreenStyles.icon]}
        >
          <Icon name="close" color="white" size={33} />
        </View>
        <View
          style={[ViewImageScreenStyles.icon, ViewImageScreenStyles.deleteIcon]}
        >
          <Icon name="delete-outline" color="white" size={33} />
        </View>
        <Image
          resizeMode="contain"
          style={ViewImageScreenStyles.image}
          source={require('./../../assets/chair.jpg')}
        />
      </View>
    </Screen>
  );
};

export default ViewImageScreen;
