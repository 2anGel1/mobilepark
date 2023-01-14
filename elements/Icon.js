import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/AntDesign'

import colors from '../style/colors'
import styles from '../style/styles'
import variables from '../style/variables'

import { IconFill, IconOutline } from "@ant-design/icons-react-native";

const IIcon = (props) => {

        return (
            
            // <Icon
            //     name="bars"
            //     size={35}
            //     color={colors.black}
            //     style={{ position: 'absolute', top: 40, left: 20 }}
            //     onPress={props.action}
            // />

            <IconOutline name="account-book" />
        )

}

export default IIcon