import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

import colors from '../config/colors';

function ViewImageScreen() {
    return (
        <View style={styles.container}  >
            <View style={styles.close} />
            <View style={styles.deleteIcon} />
            <Image resizeMode='contain' style={styles.image} source={require('../assets/chair.jpg')} />

        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.black,
        flex: 1
    },
    close: {
        width: 50,
        height: 50,
        backgroundColor: colors.danger,
        position: 'absolute',
        top: 30,
        left: 30
    },
    deleteIcon: {
        width: 50,
        height: 50,
        backgroundColor: colors.primary,
        position: 'absolute',
        top: 30,
        right: 30
    },
    image: {
        width: '100%',
        height: '100%'
    }
})
export default ViewImageScreen;