import React, { useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';

import ListItem from '../components/list/ListItem';
import Screen from '../components/Screen';
import ListItemSeparator from '../components/list/ListItemSeparator';
import ListItemDeleteAction from '../components/list/ListItemDeleteAction';

const initialMessages = [];

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
                            image: require('../assets/placeholder70x70.png')
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