import React, { useState, useEffect } from 'react'

// import { StatusBar } from 'expo-status-bar'

import { Text, View, ActivityIndicator, Pressable } from 'react-native'
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps'

import IIcon from '../../elements/Icon.js'

import BottomRect from '../../elements/BottomRect'

import styles from '../../style/styles'
import colors from '../../style/colors'
import customRetroMap from '../../style/customRetroMap.json'

import * as Location from 'expo-location';

//Axios


const Map = ({ navigation }) => {


    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);

    const [showBottomRect, setShowBottomRect] = useState(false);
    const [selectedParking, setSelectedParking] = useState({})

    const parkings = [
        {
            id: 0,
            title: 'Parking 1',
            entreprise: 'Sorbonne',
            coordinates: {
                latitude: 5.394648,
                longitude: -3.964313
            },
            tarrifs: [
                {id: 1, prix: 200, temps: "30m"},
                {id: 2, prix: 300, temps: "1h"},
                {id: 3, prix: 500, temps: '2h'}
            ],
            places: [
                {id: 1, title: "B01"},
                {id: 2, title: "B02"},
                {id: 3, title: "B03"},
            ]
        },

        {
            id: 1,
            title: 'Parking 2',
            entreprise: 'SIR',
            coordinates: {
                latitude: 5.392651,
                longitude:  -3.962360
            },
            tarrifs: [
                {id: 1, prix: 300, temps: "30m"},
                {id: 2, prix: 500, temps: "1h30m"},
                {id: 3, prix: 700, temps: '2h'},
            ],
            places: [
                {id: 1,title: "A01"},
                {id: 2,title: "A02"}, 
                {id: 3,title: "A03"},
                {id: 4,title: "A04"},
            ]
        }
    ]

    // const getData = () => {

    //     fetch("https://jsonplaceholder.typicode.com/users")
    //         .then(response => response.json())
    //         .then((responseJson) => {

    //             alert(responseJson)

    //         })
    //         .catch(error => alert(error))
    // }


    useEffect(() => {


        (async () => {

            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                setErrorMsg('Permission to access location was denied');
                return;
            }

            let location = await Location.getCurrentPositionAsync({});
            setLocation(location);
        })();
    }, []);

    let load = true;
    let longitude = "";
    let latitude = "";

    if (location) {
        load = false
    }


    if (errorMsg) {

        <View style={styles.container}>
            <Text>Permission denied</Text>
        </View>

    } else if (!load) {
        longitude = location.coords.longitude
        latitude = location.coords.latitude

        return (

            <View style={{ flex: 1 }}>

                <MapView
                    style={{ flex: 1 }}
                    provider={PROVIDER_GOOGLE}
                    region={{
                        latitude: latitude,
                        longitude: longitude,
                        latitudeDelta: 0.01,
                        longitudeDelta: 0.01
                    }}
                    showsUserLocation={true}
                    followsUserLocation={true}
                    customMapStyle={customRetroMap}
                >

                    {
                        parkings.map(parking => (

                            <Marker
                                onPress={() => {
                                    setSelectedParking(showBottomRect ? {} : parking)
                                    setShowBottomRect(!showBottomRect)
                                }}

                                key={parking.id} coordinate={parking.coordinates} title={parking.title} />
                        ))
                    }

                </MapView>

                <IIcon action={() => { navigation.openDrawer() }} />

                <BottomRect show={showBottomRect} parking={selectedParking}/>

            </View>
        )

    } else if (load) {

        return (
            <View style={styles.container}>
                <Text>Nous déterminons votre position...</Text>
                <ActivityIndicator />
            </View>
        )

    }



}

export default Map

