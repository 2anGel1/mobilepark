import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View, Image } from 'react-native';

import styles from '../style/styles'
import colors from '../style/colors'
import variables from '../style/variables';


const Splash = ({ navigation }) => {

    setTimeout(() => {
        navigation.navigate('Log')
    }, 3000)

    return (
        <View style={styles.container} backgroundColor={colors.secondary}>

            <Image
                source={require('../assets/medias/log.png')}
                style={{ width: variables.imgScale1, height: variables.imgScale1 }}
            />

            <Text style={{fontSize: 23}}>
                Mobile Park
            </Text>

            <View style={{ position: 'absolute', bottom: 0, margin: 5 }}>
                <Text style={{ fontSize: 12 }}>Deepi</Text>
            </View>

        </View>

    )
}

export default Splash
