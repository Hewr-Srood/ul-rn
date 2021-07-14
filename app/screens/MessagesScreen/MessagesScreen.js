import React, { useState } from 'react';
import { FlatList } from 'react-native';
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
    description:
      ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus quod sed, quia minus nesciunt ad, deleniti officia architecto atque, esse doloribus velit odio nobis ab ratione natus. Cumque architecto totam similique blanditiis eum dignissimos quos corrupti consequatur, explicabo, magni exercitationem sit. Placeat, reprehenderit ad amet eius labore quidem fuga minima aspernatur hic illum corporis rem praesentium ullam nisi, veritatis velit expedita eligendi vero est consectetur laudantium, ea iusto quisquam nihil. Voluptatem, dolorum itaque, numquam pariatur officia, aspernatur impedit consequatur culpa dolorem vitae sit perspiciatis? Placeat ullam, numquam quia officiis recusandae laboriosam provident labore! Ab, quod tenetur possimus totam voluptatibus accusamus?',
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
