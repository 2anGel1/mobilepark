import React, { useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import { Text, View, ScrollView, TextInput, Pressable } from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign'

import colors from '../style/colors'
import styles from '../style/styles'
import variables from '../style/variables'

const IIcon = (props) => {

        return (
            
            <Icon
                name="bars"
                size={35}
                color={colors.black}
                style={{ position: 'absolute', top: 40, left: 20 }}
                onPress={props.action}
            />
        )

}

export default IIcon