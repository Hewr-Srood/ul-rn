import React from 'react';
import { FlatList } from 'react-native';
import Card from '../../components/Card/Card';
import Screen from '../../components/Screen/Screen';
import ListinsScreenStyles from './ListingsScreenStyles';
const listings = [
  {
    id: 1,
    title: 'Red Jacxket for sale',
    price: 100,
    image: require('../../assets/jacket.jpg'),
  },
  {
    id: 2,
    title: 'Couch in great condition',
    price: 1000,
    image: require('../../assets/couch.jpg'),
  },
];
const ListingsScreen = () => {
  return (
    <Screen style={ListinsScreenStyles.screen}>
      <FlatList
        data={listings}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subTitle={'$' + item.price}
            image={item.image}
          />
        )}
      />
    </Screen>
  );
};

export default ListingsScreen;
