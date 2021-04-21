import React from 'react';
import { ImageBackground, View, Image, Text } from 'react-native';
import AppButton from '../../components/AppButton/AppButton';
import colors from '../../config/colors';
import WelcomeScreenStyles from './WelcomeScreenStyles';

const WelcomeScreen = () => {
  return (
    <ImageBackground
      blurRadius={10}
      style={WelcomeScreenStyles.background}
      source={require('../../assets/background.jpg')}
    >
      <View style={WelcomeScreenStyles.logoContainer}>
        <Image
          style={WelcomeScreenStyles.logo}
          source={require('../../assets/logo-red.png')}
        />
        <Text style={WelcomeScreenStyles.tagLine}>
          Sell What You Don't Need
        </Text>
      </View>
      <View style={WelcomeScreenStyles.buttonsContainer}>
        <AppButton
          title="login"
          color={colors.primary}
          onPress={() => {
            console.log('hy');
          }}
        />
        <AppButton
          title="register"
          color={colors.secondary}
          onPress={() => {
            console.log('hy');
          }}
        />
      </View>
    </ImageBackground>
  );
};

export default WelcomeScreen;
