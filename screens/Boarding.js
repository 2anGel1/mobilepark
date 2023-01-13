import React from 'react';
import { Text, View, ScrollView, TextInput, Pressable } from 'react-native';

// import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createDrawerNavigator } from '@react-navigation/drawer'


import Map from './boarding/Map'


const Drawer = createDrawerNavigator()
const Stack = createNativeStackNavigator()

const Boarding = () => {
    return (

        <Drawer.Navigator initialRouteName='Map'>

            <Drawer.Screen
                name='Map'
                component={Map}
                options={{headerShown: false}}
            />

        </Drawer.Navigator>

    )
}

export default Boarding
