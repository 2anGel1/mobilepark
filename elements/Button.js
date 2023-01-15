import { Text, View, ScrollView, TextInput, Pressable } from 'react-native'

import colors from '../style/colors'
import styles from '../style/styles'
import variables from '../style/variables'


const Button = (props) => {
    return (
        <Pressable
            style={styles.buttonCanvas}
            onPress={props.action}
        >
            <Text style={styles.buttonText}>
                {props.title}
            </Text>
        </Pressable>
    )
}

export default Button