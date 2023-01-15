import React from 'react';
import { Text, View, ScrollView, TextInput, Pressable, Image } from 'react-native';

import colors from '../style/colors'
import styles from '../style/styles'
import variables from '../style/variables'

import Button from '../elements/Button';

const Log = ({ navigation }) => {

    return (
        <ScrollView contentContainerStyle={styles.container}>

            <View style={styles.container} backgroundColor={colors.whitesmoke} width={'100%'}>

                <Image
                    source={require('../assets/medias/log.png')}
                    style={{ width: variables.imgScale2, height: variables.imgScale2 }}
                />
                <View style={styles.topCircle1} />
                <View style={styles.topCircle2} />

                <Text style={{ marginBottom: 30, fontSize: 18 }}>
                    Connectez vous !
                </Text>

                <View style={{ alignItems: 'center', justifyContent: 'center' }}>

                    <TextInput
                        style={styles.input}
                        placeholder='Entrer votre nom numéro de telephone'
                        placeholderTextColor={colors.grey}
                        keyboardType='number-pad'
                    />
                    <TextInput
                        style={styles.input}
                        placeholderTextColor={colors.grey}
                        placeholder='Entrer votre mot de passe'
                    />

                </View>

                <View style={{ flexDirection: 'center', alignItems: 'center' }}>
                {/* <View style={{alignItems: 'center' }}> */}

                    <Button title="Se connecter" action={() => { navigation.navigate("Boarding") }} />

                    <View style={{ flexDirection: 'row', marginTop: 10 }}>
                    {/* <View style={{marginTop: 10 }}> */}

                        <Text>
                            Vous n'avez pas de compte ?
                        </Text>
                        <Pressable
                            onPress={() => { navigation.navigate('Sign') }}
                        >
                            <Text style={{ color: colors.primary }}> S'enregistrer</Text>
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

export default Log
