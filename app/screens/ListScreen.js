import React from 'react';
import { StyleSheet, View } from 'react-native';

import Card from '../components/Card';

function ListScreen() {
    return (
        <View style={{
            backgroundColor: '#e2dede',
            padding: 20,
            paddingTop: 50,
        }}>
            <Card 
                title='Red jacket for sale!'
                subTitle='$100'
                image={require('../assets/test/jacket.jpg')}
            />
        </View>
    );
}

const styles = StyleSheet.create({

})

export default ListScreen;
