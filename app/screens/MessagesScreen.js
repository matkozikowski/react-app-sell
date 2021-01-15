import React, { useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';

import ListItem from '../components/list/ListItem';
import Screen from '../components/Screen';
import ListItemSeparator from '../components/list/ListItemSeparator';
import ListItemDeleteAction from '../components/list/ListItemDeleteAction';

const initialMessages = [
    {
        id: 1,
        title: 'Aliquam erat volutpat',
        description: 'Aliquam erat volutpat. Phasellus commodo, sem id vulputate lobortis,',
        image: require('../assets/test/avatar.jpeg')
    },
    {
        id: 2,
        title: 'Lorem ipsum dolor',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vel ligula vel enim tempus volutpat. Praesent congue libero sed risus ultricies',
        image: require('../assets/test/avatar.jpeg')
    }
]

function MessagesScreen(props) {
    const [messages, setMessages] = useState(initialMessages);
    const [refreshing, setRefreshing] = useState(false);

    const handleDelete = message => {
        setMessages(messages.filter(m => m.id !== message.id));
    }

    return (
        <Screen>
            <FlatList 
                data={messages}
                keyExtractor={message => message.id.toString()}
                renderItem={({ item }) => 
                <ListItem 
                    title={item.title}
                    subTitle={item.description}
                    image={item.image}
                    onPress={() => console.log('item selected: ', item)}
                    renderRightActions={() => 
                    <ListItemDeleteAction onPress={() => handleDelete(item)} />}
                />}
                ItemSeparatorComponent={ListItemSeparator}
                refreshing={refreshing}
                onRefresh={() => {
                    setMessages([
                        {
                            id: 3,
                            title: 'Lorem ipsum dolor sit amet',
                            description: 'Nam vel ligula vel enim tempus volutpat',
                            image: require('../assets/test/avatar.jpeg')
                        }  
                    ])
                }}
            />
        </Screen>
    );
}

const styles = StyleSheet.create({

})

export default MessagesScreen;