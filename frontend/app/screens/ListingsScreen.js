import React, { useState, useEffect } from 'react';
import { FlatList, StyleSheet } from 'react-native';

import ActivityIndicator from '../components/ActivityIndicator';
import Button from '../components/Button';
import Card from '../components/Card';
import Text from '../components/Text';
import Screen from '../components/Screen';
import listingsApi from '../api/listings';
import colors from '../config/colors';
import routes from '../navigation/routes';
import useApi from '../hooks/useApi';

function ListingsScreen({ navigation }) {
    const {data: listings, error, loading, request: loadListings } = useApi(listingsApi.getListings);

    useEffect(() => {
        loadListings();
    }, []);

    return (
        <>
            <ActivityIndicator visible={listings.loading} />
            <Screen style={styles.screen}>
                {error && <>
                    <Text>Couldn't retrieve the listings.</Text>
                    <Button title="Retry" onPress={loadListings} />
                </>}
                            <FlatList 
                    data={listings}
                    keyExtractor={listing => listing.id.toString()}
                    renderItem={({ item }) => 
                        <Card
                            title={item.title}
                            subTitle={'$' + item.price}
                            imageUrl={item.images[0].url}
                            onPress={() => navigation.navigate(routes.LISTING_DETAILS, item)}
                            thumbnailUrl={item.images[0].thumbnailUrl}
                        />
                    }
                />
            </Screen>
        </>
    );
}

const styles = StyleSheet.create({
    screen: {
        padding: 20,
        backgroundColor: colors.light
    }    
})

export default ListingsScreen;