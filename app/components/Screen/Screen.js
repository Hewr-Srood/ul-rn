import React from 'react';
import { SafeAreaView, View } from 'react-native';
import ScreenStyles from './ScreenStyles';

function Screen({ children, style }) {
  return (
    <SafeAreaView style={[ScreenStyles.screen, style]}>
      <View style={[ScreenStyles.view, style]}>{children}</View>
    </SafeAreaView>
  );
}

export default Screen;
