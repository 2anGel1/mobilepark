import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { Text, View, ScrollView, TextInput, Pressable } from 'react-native'
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'
import Icon from 'react-native-vector-icons/AntDesign'
import IIcon from '../../elements/Icon.js'

import colors from '../../style/colors'
import styles from '../../style/styles'
import variables from '../../style/variables'



const Map = ({navigation}) => {


    return (
        <View style={{ flex: 1 }}>

            <MapView
                style={{ flex: 1 }}
                // provider={PROVIDER_GOOGLE}
                initialRegion={{
                    latitude: 5.322662032992469,
                    longitude: -4.019345507466149,
                    latitudeDelta: 0.01,
                    longitudeDelta: 0.01
                }}
            />

            {/* <Icon
                name="bars"
                size={35}
                color={colors.black}
                style={{ position: 'absolute', top: 40, left: 20}}
                onPress={() => {
                    navigation.openDrawer()
                }}
                
            /> */}

            <IIcon action={() => {navigation.openDrawer()}}/>

            <StatusBar
                backgroundColor={colors.white}
            />
        </View>
    )
}

export default Map

