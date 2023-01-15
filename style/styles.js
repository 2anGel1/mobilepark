import { StyleSheet, Dimensions } from "react-native";

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
    },

    buttonCanvas: {
        backgroundColor: colors.primary,
        width: variables.inputWidth,
        height: variables.inputHeight,
        justifyContent: 'center',
        marginTop: 20,
        borderRadius: 10
    },

    buttonText: {
        textAlign: 'center',
        color: colors.white,
        fontSize: 17
    },

    bottomRect: {

        backgroundColor: colors.white,
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height / 1.5,

        position: 'absolute',
        top: Dimensions.get('window').height - Dimensions.get('window').height / 1.5,
        bottom: 0,
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
    },

    tarrifContainer: {
        width: '80%',
        height: '50%',

        textAlign: 'center',

        marginHorizontal: '10%',
        marginTop: 25
    },

    tarrifRect: {

        width: '100%',
        height: '25%',
        marginBottom: 10,
        padding: 20,

        backgroundColor: colors.white,
        borderRadius: 7,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,

        elevation: 7,
    },

    placeContainer: {
        width: '90%',
        height: '10%',

        marginHorizontal: '5%',

    },

    payRect:{
        width: '85%',
        height: 60,

        marginHorizontal: '7%',
        marginTop: 10,

        borderRadius: 7,
        borderWidth: 2,
        borderColor: colors.grey
    }
});

export default styles