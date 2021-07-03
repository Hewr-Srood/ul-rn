import React from 'react';
import { StyleSheet } from 'react-native';
import AppText from '../../AppText/AppText';

const ErrorMessage = ({ error, visible }) => (
  <>{visible && error && <AppText styles={styles.error}>{error}</AppText>}</>
);
const styles = StyleSheet.create({
  error: {
    color: 'red',
  },
});
export default ErrorMessage;
