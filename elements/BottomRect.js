import React, { useState, useEffect } from 'react'

import { Text, View, ScrollView, TextInput, Pressable } from 'react-native'

import colors from '../style/colors'
import styles from '../style/styles'
import variables from '../style/variables'

import Button from './Button';


const BottomRect = (props) => {

    const [selectedTarrif, setSelectedTarrif] = useState();
    const [selectedPay, setSelectedPay] = useState(1);

    const [tab, setTab] = useState(0);

    const payMethods = [
        { id: 1, title: 'Payer cash au parking' },
        { id: 2, title: 'Payer par Mobile Monney' },
        { id: 3, title: 'Payer par carte bancaire' },
    ]


    if (props.show) {

        if (tab == 0) {

            return (

                <View style={styles.bottomRect}>

                    <Text
                        style={{ textAlign: 'center', marginTop: 15 }}
                    >
                        {props.parking.title}
                    </Text>
                    <Text
                        style={{ textAlign: 'center' }}
                    >
                        Parking de la {props.parking.entreprise}
                    </Text>



                    <View style={styles.tarrifContainer}>

                        {

                            props.parking.tarrifs.map(tarrif => (

                                <Pressable
                                    key={tarrif.id}
                                    style={styles.tarrifRect}
                                    onPress={() => { setSelectedTarrif(tarrif.id) }}
                                >
                                    <View style={{ flexDirection: "row", width: '100%', justifyContent: "space-between" }}>
                                        <Text
                                            style=
                                            {{
                                                color: selectedTarrif == tarrif.id ? colors.primary : colors.black,
                                                fontWeight: selectedTarrif == tarrif.id ? 'bold' : null,
                                                fontSize: 16
                                            }}
                                        >
                                            {tarrif.temps}
                                        </Text>

                                        <Text
                                            style=
                                            {{
                                                color: selectedTarrif == tarrif.id ? colors.primary : colors.black,
                                                fontWeight: selectedTarrif == tarrif.id ? 'bold' : null,
                                                fontSize: 16
                                            }}
                                        >
                                            {tarrif.prix} XOF
                                        </Text>
                                    </View>
                                </Pressable>

                            ))

                        }

                        <Text
                            style={{ textAlign: 'center', fontWeight: 'bold' }}
                        >Places disponibles</Text>

                    </View>

                    <View style={styles.placeContainer}>
                        <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-between', padding: 10 }}>

                            {
                                props.parking.places.map(place => (

                                    <View key={place.id} style={{ width: '20%' }}>
                                        <Text style={{ textAlign: 'center', marginBottom: 5 }}>{place.title}</Text>
                                        <View style={{ width: '100%', height: 5, backgroundColor: colors.grey, borderRadius: 5 }}></View>
                                    </View>

                                ))
                            }

                        </View>
                    </View>

                    <View style={{ marginHorizontal: 35 }}>
                        <Pressable
                            style={styles.buttonCanvas}
                            onPress={() => { setTab(1) }}
                        >
                            <Text style={styles.buttonText}>
                                Suivant
                            </Text>
                        </Pressable>
                    </View>



                </View>

            )

        } else if (tab == 1) {

            return (

                <View style={styles.bottomRect}>

                    <Text
                        style={{ textAlign: 'center', marginTop: 15 }}
                    >
                        {props.parking.title}
                    </Text>
                    <Text
                        style={{ textAlign: 'center' }}
                    >
                        Parking de la {props.parking.entreprise}
                    </Text>

                    <Text
                        style={{ textAlign: 'center', marginTop: 30, fontSize: 18, color: colors.secondary}}
                    >
                        Mode de paiement
                    </Text>

                    {
                        payMethods.map(method => (

                            <Pressable
                                id={method.id}
                                style={styles.payRect} borderColor={selectedPay == method.id ? colors.secondary : colors.whitesmoke}
                                onPress={() => {setSelectedPay(method.id)}}
                            >

                                <Text>
                                    {method.title}
                                </Text>
                                
                            </Pressable>

                        ))
                    }


                    <View style={{ marginHorizontal: 35 }}>
                        <Pressable
                            style={styles.buttonCanvas}
                            onPress={() => { setTab(0) }}
                        >
                            <Text style={styles.buttonText}>
                                Suivant
                            </Text>
                        </Pressable>
                    </View>


                </View>

            )

        }

    } else {
        return null;
    }

}

export default BottomRect