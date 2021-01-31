import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';

import useAuth from '../auth/useAuth';
import Screen from '../components/Screen';
import ListItem from '../components/list/ListItem';
import Icon from '../components/Icon';
import colors from '../config/colors';
import ListItemSeparator from '../components/list/ListItemSeparator';

const menuItems = [
    {
        title: 'My Listings',
        icon: {
            name: 'format-list-bulleted',
            backgroundColor: colors.primary,
        },
    },
    {
        title: 'My Messages',
        icon: {
            name: 'email',
            backgroundColor: colors.secondary,
        },
        targetScreen: "Messages"
    }
]

function AccountScreen({ navigation }) {
    const { user, logOut } = useAuth();

    return (
        <Screen style={styles.screen}>
            <View style={styles.container}>
                <ListItem 
                    title={user.name}
                    subTitle={user.email}
                    image={require('../assets/placeholder70x70.png')}
                />
            </View>
            <View style={styles.container}>
                <FlatList 
                    data={menuItems}
                    keyExtractor={menuItem => menuItem.title}
                    ItemSeparatorComponent={ListItemSeparator}
                    renderItem={({ item }) =>
                        <ListItem
                            title={item.title}
                            IconComponent={
                                <Icon name={item.icon.name} backgroundColor={item.icon.backgroundColor} />
                            }
                            onPress={() => navigation.navigate(item.targetScreen)}
                        />
                    }
                />
            </View>
            <ListItem 
                title='Log Out'
                IconComponent={
                    <Icon name='logout' backgroundColor='#ffe66d' />
                }
                onPress={() => logOut()}
            />
        </Screen>
    );
}

const styles = StyleSheet.create({
    screen: {
        backgroundColor: colors.light
    },
    container: {
        marginVertical: 20
    }
})

export default AccountScreen;