import React, { useState } from 'react';
import { FlatList } from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';
import ListItem from '../../components/ListItem/ListItem';
import ListItemDeleteAction from '../../components/ListItemDeleteAction/ListItemDeleteAction';
import ListItemSeperator from '../../components/ListItemSeperator';
import Screen from '../../components/Screen/Screen';

const initialMessages = [
  {
    id: 1,
    title: 't1',
    description: 'd1',
    image: require('../../assets/user.jpg'),
  },
  {
    id: 2,
    title: 't2',
    description: 'd2',
    image: require('../../assets/user.jpg'),
  },
  {
    id: 3,
    title: 't3',
    description: 'd3',
    image: require('../../assets/user.jpg'),
  },
];
const MessagesScreen = () => {
  const [refreshing, setRefreshing] = useState(false);
  const [messages, setMessages] = useState(initialMessages);

  const handleMessage = (message) => {
    setMessages(messages.filter((m) => m.id !== message.id));
  };
  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        refreshing={refreshing}
        onRefresh={() => setMessages(initialMessages)}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subTitle={item.description}
            image={item.image}
            renderRightActions={() => (
              <ListItemDeleteAction onPress={() => handleMessage(item)} />
            )}
          />
        )}
        ItemSeparatorComponent={ListItemSeperator}
      />
    </Screen>
  );
};

export default MessagesScreen;
