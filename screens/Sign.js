import React from 'react';
import { Text, View, ScrollView, TextInput, Pressable } from 'react-native';

import colors from '../style/colors'
import styles from '../style/styles'
import variables from '../style/variables'


const Sign = ({ navigation }) => {

    return (
        <ScrollView contentContainerStyle={styles.container}>

            <View style={styles.container} backgroundColor={colors.whitesmoke} width={'100%'}>

                <View style={styles.topCircle1} />
                <View style={styles.topCircle2} />

                <Text style={{ marginBottom: 30, fontSize: 18 }}>
                    Bienvenue !
                </Text>

                <View style={{ alignItems: 'center', justifyContent: 'center' }}>

                    <TextInput
                        style={styles.input}
                        placeholder='Entrer votre nom complet'
                        placeholderTextColor={colors.grey}
                    />
                    <TextInput
                        style={styles.input}
                        placeholderTextColor={colors.grey}
                        placeholder='Entrer le matricule de votre véhicule'
                    />
                    <TextInput
                        style={styles.input}
                        placeholderTextColor={colors.grey}
                        placeholder='Entrer votre numero de telephone'
                        keyboardType='number-pad'
                    />
                    <TextInput
                        style={styles.input}
                        placeholderTextColor={colors.grey}
                        placeholder='Entrer un mot de passe'
                    />
                    <TextInput
                        style={styles.input}
                        placeholderTextColor={colors.grey}
                        placeholder='Confirmer le mot de passe'
                    />

                </View>

                <View style={{ flexDirection: 'center', alignItems: 'center' }}>

                    <Pressable
                        style={{ backgroundColor: colors.primary, width: variables.inputWidth, height: variables.inputHeight, justifyContent: 'center', marginTop: 20, borderRadius: 10 }}
                        onPress={() => {
                            navigation.navigate('Boarding')
                        }} dae0e1
                    >
                        <Text style={{ textAlign: 'center', color: colors.white, fontSize: 17 }}>
                            S'identifier
                        </Text>
                    </Pressable>

                    <View style={{ flexDirection: 'row', marginTop: 10 }}>

                        <Text>
                            Avez vous dejà un compte ?
                        </Text>
                        <Pressable
                            onPress={() => { navigation.navigate('Log') }}>

                            <Text style={{ color: colors.primary }}> Se connecter</Text>
                        </Pressable>

                    </View>
                </View>

                <View style={{ position: 'absolute', bottom: 0, margin: 5 }}>
                    <Text style={{ fontSize: 12 }}>Deepi</Text>
                </View>

            </View>

        </ScrollView>
    )
}

export default Sign
