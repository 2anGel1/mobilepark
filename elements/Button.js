import { Text, View, ScrollView, TextInput, Pressable } from 'react-native'

import colors from '../style/colors'
import styles from '../style/styles'
import variables from '../style/variables'


const Button = (props) => {
    return (
        <Pressable
            style={{ backgroundColor: colors.primary, width: variables.inputWidth, height: variables.inputHeight, justifyContent: 'center', marginTop: 20, borderRadius: 10 }}
            onPress={props.action}
        >
            <Text style={{ textAlign: 'center', color: colors.white, fontSize: 17 }}>
                {props.title}
            </Text>
        </Pressable>
    )
}

export default Button