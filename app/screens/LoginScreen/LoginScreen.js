import React from 'react';
import { Image } from 'react-native';
import Screen from '../../components/Screen/Screen';
import LoginScreenStyles from './LoginScreenStyles';
import * as Yup from 'yup';

import { AppForm, AppFormField, SubmitButton } from '../../components/forms';

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label('Email'),
  password: Yup.string().required().min(8).max(12).label('Password'),
});

const LoginScreen = () => {
  return (
    <Screen style={LoginScreenStyles.container}>
      <Image
        style={LoginScreenStyles.logo}
        source={require('../../assets/logo-red.png')}
      />
      <AppForm
        onSubmit={(e) => console.log(e)}
        validationSchema={validationSchema}
        initialValues={{ email: '', password: '' }}
      >
        <>
          <AppFormField
            name="email"
            icon="email"
            placeholder="Email"
            autoCapitalized="none"
            autoCorrect={false}
            keyboardType="email-address"
            textContentType="emailAddress"
          />
          <AppFormField
            name="password"
            icon="lock"
            placeholder="Password"
            autoCapitalized="none"
            autoCorrect={false}
            secureTextEntry
            textContentType="password"
          />
          <SubmitButton title="Login" />
        </>
      </AppForm>
    </Screen>
  );
};

export default LoginScreen;
