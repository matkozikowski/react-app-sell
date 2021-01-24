import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Image } from "react-native-expo-image-cache";
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

import colors from '../config/colors';
import Text from './Text';

function Card({title, subTitle, imageUrl, onPress, thumbnailUrl}) {
    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <View style={styles.card}>
                <Image 
                    style={styles.image}
                    tint="light"
                    preview={{ uri: thumbnailUrl }} 
                    uri={imageUrl} 
                />
                <View style={styles.detailContainer}>
                    <Text style={styles.title}>{title}</Text>
                    <Text style={styles.subTitle}>{subTitle}</Text>
                </View>
            </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    card: {
        borderRadius: 15,
        backgroundColor: colors.white,
        marginBottom: 20,
        overflow: 'hidden',
    },
    detailContainer: {
        padding: 20,
    },
    image: {
        width: '100%',
        height: 200,
    },
    subTitle: {
        color: colors.secondary,
        fontWeight: 'bold'
    },
    title: {
        marginBottom: 7,
    }
})

export default Card;