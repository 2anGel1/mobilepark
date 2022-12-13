import { StyleSheet } from "react-native";

import colors from "./colors";
import variables from "./variables"


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },

    input: {
        width: variables.inputWidth,
        height: variables.inputHeight,
        borderRadius: 30,
        backgroundColor: colors.white,
        paddingLeft: 10,
        marginTop: variables.inputMargins,
        marginBottom: variables.inputMargins,
    },

    splash: {
        flex: 1,
        backgroundColor: '#78bfd9',
        alignItems: 'center',
        justifyContent: 'center',
    },

    topCircle1: {
        width: 150,
        height: 150,
        borderRadius: 100,
        backgroundColor: colors.primary,
        position: 'absolute',
        left: -60,
        top: -60
    },

    topCircle2: {
        width: 150,
        height: 150,
        borderRadius: 100,
        backgroundColor: colors.secondary,
        position: 'absolute',
        left: -30,
        top: -100
    }
});

export default styles