import React from 'react';
import { ImageBackground, View, Image, Text } from 'react-native';
import WelcomeScreenStyles from './WelcomeScreenStyles';

const WelcomeScreen = () => {
  return (
    <ImageBackground
      style={WelcomeScreenStyles.background}
      source={require('../../assets/background.jpg')}
    >
      <View style={WelcomeScreenStyles.logoContainer}>
        <Image
          style={WelcomeScreenStyles.logo}
          source={require('../../assets/logo-red.png')}
        />
        <Text>Sell WHat You Don't Need</Text>
      </View>
      <View style={WelcomeScreenStyles.loginBtn} />
      <View style={WelcomeScreenStyles.registerBtn} />
    </ImageBackground>
  );
};

export default WelcomeScreen;
