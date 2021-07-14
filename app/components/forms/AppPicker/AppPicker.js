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
import defaultStyles from '../../../config/defaultStyles';
import AppText from '../../AppText/AppText';
import PickerItem from '../../PickerItem/PickerItem';
import AppPickerStyles from './AppPickerStyles';

const AppPicker = ({
  icon,
  PickerItemComponent = PickerItem,
  items,
  width = '100%',
  onSelectItem,
  selectedItem,
  placeholder,
  numberOfColumns,
}) => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <>
      <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
        <View style={[AppPickerStyles.container, { width }]}>
          {icon && (
            <Icon
              color={defaultStyles.colors.medium}
              style={AppPickerStyles.icon}
              type="material-community"
              name={icon}
              size={20}
            />
          )}

          <AppText
            styles={
              selectedItem ? AppPickerStyles.text : AppPickerStyles.placeholder
            }
          >
            {selectedItem ? selectedItem.label : placeholder}
          </AppText>
          <Icon
            color={defaultStyles.colors.medium}
            type="material-community"
            name="chevron-down"
            size={20}
          />
        </View>
      </TouchableWithoutFeedback>
      <Modal
        visible={modalVisible}
        animationType="slide"
        style={{ backgroundColor: 'red' }}
      >
        <Pressable
          style={AppPickerStyles.closeBtn}
          color="white"
          onPress={() => setModalVisible(false)}
        >
          <Text style={AppPickerStyles.closeText}>close</Text>
        </Pressable>

        <FlatList
          data={items}
          contentContainerStyle={AppPickerStyles.flatListContainer}
          numColumns={numberOfColumns}
          keyExtractor={(item) => item.value.toString()}
          renderItem={({ item }) => (
            <PickerItemComponent
              item={item}
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
