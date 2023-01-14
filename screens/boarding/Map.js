import React, { useState, useEffect } from 'react'
import { StatusBar } from 'expo-status-bar'
import { Text, View, ActivityIndicator } from 'react-native'
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps'
import IIcon from '../../elements/Icon.js'

import colors from '../../style/colors'
import styles from '../../style/styles'
import customRetroMap from '../../style/customRetroMap.json'
import variables from '../../style/variables'

import * as Location from 'expo-location';


const Map = ({ navigation }) => {


    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);

    const markers = [
        {
            key: 0,
            title: 'Parking 1',
            coordinates: {
                latitude: "5.388906",
                longitude: "-3.965171"
            }
        },

        {
            key: 1,
            title: 'Parking 2',
            coordinates: {
                latitude: "5.387651",
                longitude: "-3.962596"
            }
        }
    ]

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

    if(location){
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
                    // customMapStyle={customRetroMap}
                >

                    {
                        markers.map(marker => (
                            <Marker key={marker.key} coordinate={marker.coordinates} title={marker.title}/>
                        ))
                    }

                </MapView>

                {/* <IIcon action={() => { navigation.openDrawer() }} /> */}

                <StatusBar
                    backgroundColor={colors.white}
                />
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

