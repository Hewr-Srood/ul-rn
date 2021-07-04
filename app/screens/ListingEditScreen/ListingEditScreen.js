import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import Screen from '../../components/Screen/Screen';
import * as Yup from 'yup';

import {
  AppForm,
  AppFormField,
  SubmitButton,
  AppPicker,
} from '../../components/forms';

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label('Title'),
  price: Yup.number().required().min(1).max(10000).label('Price'),
  description: Yup.string().label('Description'),
  category: Yup.object().required().nullable().label('Category'),
});
const categories = [
  { label: 'Furniture', value: 1 },
  { label: 'Clothing', value: 2 },
  { label: 'Camera', value: 3 },
];

const LoginScreen = () => {
  const [selectedItem, setSelectedItem] = useState();
  return (
    <Screen style={styles.container}>
      <AppForm
        onSubmit={(e) => console.log(e)}
        validationSchema={validationSchema}
        initialValues={{ email: '', password: '' }}
      >
        <>
          <AppFormField maxLength={255} name="title" placeholder="Title" />
          <AppFormField
            keyboardType="numeric"
            maxLength={8}
            name="price"
            placeholder="Price"
          />
          <AppPicker
            items={categories}
            name="category"
            placeholder="Category"
            selectedItem={selectedItem}
            onSelectItem={setSelectedItem}
          />
          <AppFormField
            maxLength={255}
            multiline
            name="description"
            numberOfLines={3}
            placeholder="Description"
          />
          <SubmitButton title="Post" />
        </>
      </AppForm>
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});
export default LoginScreen;
