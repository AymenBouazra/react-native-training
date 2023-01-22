import React from 'react'
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native'

const WelcomeScreen = () => {
    return (
        <ImageBackground style={styles.background} source={require('../assets/red-house.jpg')}>
            <View style={styles.logoContainer}>
                <Image source={require('../assets/red-logo.png')} style={styles.logo} />
                <Text>Sell what you don't need</Text>
            </View>
            <View style={styles.loginButton} ></View>
            <View style={styles.registerButton} ></View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: 'center'
    },
    logo: {
        width: 100,
        height: 100,
        marginBottom: 20
    },
    logoContainer: {
        position: 'absolute',
        top: 70,
        alignItems: 'center'
    },
    loginButton: {
        width: '100%',
        height: 70,
        backgroundColor: '#fc5c65',
    },
    registerButton: {
        width: '100%',
        height: 70,
        backgroundColor: '#4ecdc4',
    },

})
export default WelcomeScreen