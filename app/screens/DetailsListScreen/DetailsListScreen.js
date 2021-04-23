import React, { Component } from 'react';
import { View, Image } from 'react-native';
import AppText from '../../components/AppText/AppText';
import ListItem from '../../components/ListItem/ListItem';
import DetailsListScreenStyles from './DetailslistcreenStyles';

export class DetailsListScreen extends Component {
  render() {
    return (
      <View>
        <Image
          style={DetailsListScreenStyles.image}
          source={require('../../assets/jacket.jpg')}
        />
        <View style={DetailsListScreenStyles.detailsContainer}>
          <AppText styles={DetailsListScreenStyles.title}>
            Red jacket for sale
          </AppText>
          <AppText styles={DetailsListScreenStyles.price}>100$</AppText>
          <View style={DetailsListScreenStyles.userContainer}>
            <ListItem
              image={require('./../../assets/user.jpg')}
              title="hewr srood"
              subTitle="2 Listings"
            />
          </View>
        </View>
      </View>
    );
  }
}

export default DetailsListScreen;
