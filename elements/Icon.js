import React, { useState } from 'react'
import {Pressable } from 'react-native'

import colors from '../style/colors'
// import styles from '../style/styles'
// import variables from '../style/variables'


const IIcon = (props) => {

    return (

        <Pressable
            style={{ backgroundColor: colors.white, width: 50, height: 50, borderRadius: 10, position: 'absolute', top: 40, left: 20 }}
            onPress={props.action}
        >
        </Pressable>

    )

}

export default IIcon


