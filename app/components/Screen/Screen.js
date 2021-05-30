import React from 'react';
import { SafeAreaView } from 'react-native';
import ScreenStyles from './ScreenStyles';

function Screen({ children, style }) {
  return (
    <SafeAreaView style={[ScreenStyles.screen, style]}>{children}</SafeAreaView>
  );
}

export default Screen;
