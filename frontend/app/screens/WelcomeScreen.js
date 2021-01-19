import React from 'react';
import { ImageBackground, Image, StyleSheet, View } from 'react-native';

import AppButton from '../components/AppButton';
import routes from '../navigation/routes';

function WelcomeScreen({ navigation }) {
    return (
        <ImageBackground 
            blurRadius={10}
            style={styles.background}
            source={require('../assets/welcome-bg.jpeg')}
        >
            <View style={styles.logoContainer}>
                <Image style={styles.logo} source={require('../assets/wecservice-logo.png')} />
            </View>
            <View style={styles.buttonContainer}>
                <AppButton title="Login" onPress={() => navigation.navigate(routes.LOGIN)} />
                <AppButton title="Register" color="secondary" onPress={() => navigation.navigate(routes.REGISTER)} />
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    logo: {
        width: 100,
    },
    logoContainer: {
        position: 'absolute',
        top: 70,
        alignItems: 'center',
    }, 
    buttonContainer: {
        padding: 20,
        width: '100%',
    }
})

export default WelcomeScreen;