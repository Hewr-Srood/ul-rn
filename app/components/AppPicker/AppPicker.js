import React, { useState } from 'react';
import {
  View,
  TouchableWithoutFeedback,
  Modal,
  FlatList,
  Text,
  Pressable,
} from 'react-native';
import { Icon } from 'react-native-elements';
import deafultStyles from '../../config/deafultStyles';
import AppText from '../AppText/AppText';
import PickerItem from '../PickerItem/PickerItem';
import AppPickerStyles from './AppPickerStyles';

const AppPicker = ({
  icon,
  items,
  onSelectItem,
  selectedItem,
  placeholder,
}) => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <>
      <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
        <View style={AppPickerStyles.container}>
          {icon && (
            <Icon
              color={deafultStyles.colors.medium}
              style={AppPickerStyles.icon}
              type="material-community"
              name={icon}
              size={20}
            />
          )}
          <AppText styles={AppPickerStyles.text}>
            {selectedItem ? selectedItem.label : placeholder}
          </AppText>
          <Icon
            color={deafultStyles.colors.medium}
            type="material-community"
            name="chevron-down"
            size={20}
          />
        </View>
      </TouchableWithoutFeedback>
      <Modal visible={modalVisible} animationType="slide">
        <Pressable
          style={AppPickerStyles.closeBtn}
          color="white"
          onPress={() => setModalVisible(false)}
        >
          <Text style={AppPickerStyles.closeText}>close</Text>
        </Pressable>
        <FlatList
          data={items}
          keyExtractor={(item) => item.value.toString()}
          renderItem={({ item }) => (
            <PickerItem
              label={item.label}
              onPress={() => {
                setModalVisible(false);
                onSelectItem(item);
              }}
            />
          )}
        />
      </Modal>
    </>
  );
};

export default AppPicker;
