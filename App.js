import { StatusBar } from 'expo-status-bar'
import React from 'react'

import Splash from './screens/Splash'
import Boarding from './screens/Boarding'
import Sign from './screens/Sign'
import Log from './screens/Log'
import Map from './screens/boarding/Map'

import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

const Stack = createNativeStackNavigator()

export default function App() {
  return (

    <NavigationContainer>

      <Stack.Navigator initialRouteName='Boadring' screenOptions={{ headerShown: false }}>

        <Stack.Screen
          name="Splash"
          component={Splash}
        />

        <Stack.Screen
          name="Sign"
          component={Sign}
        />

        <Stack.Screen
          name="Log"
          component={Log}
        />

        <Stack.Screen
          name="Boarding"
          component={Boarding}
        />

      </Stack.Navigator>

    </NavigationContainer>

  );
}
