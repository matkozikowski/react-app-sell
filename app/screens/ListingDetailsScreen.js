import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import Text from '../components/Text';
import ListItem from '../components/list/ListItem';

import colors from '../config/colors';

function ListingDetailsScreen(props) {
    return (
        <View>
            <Image style={styles.image} source={require('../assets/test/jacket.jpg')} />
            <View style={styles.detailsContainer}>
                <Text style={styles.title}>Red jacket to sale</Text>
                <Text style={styles.price}>100%</Text>
                <View style={styles.userContainer}>
                    <ListItem 
                        image={require('../assets/test/avatar.jpeg')}
                        title="Mateusz Kozikowski"
                        subTitle="5 Listings"
                    />
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    detailsContainer: {
        padding: 20,
    },
    image: {
        width: '100%',
        height: 300,
    },
    price: {
        color: colors.secondary,
        fontWeight: 'bold',
        fontSize: 20,
        marginVertical: 10,
    },
    title: {
        fontSize: 20,
        fontWeight: '500',
    },
    userContainer: {
        marginVertical: 40,
    }
})

export default ListingDetailsScreen;