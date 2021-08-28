import React, { useState } from 'react'
import { View, StyleSheet, Dimensions, } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { TextInput } from 'react-native-paper'
export default function SearchBar({ fetchWeatherData }) {

    const [cityName, setCityName] = useState('');

    return (
        <View style={styles.container} >
            <TextInput 
                style={styles.textInput}
                label="Search City"
                value={cityName}
                onChangeText={(text) => setCityName(text)}
                right={
                    <TextInput.Icon
                        name={() => <Ionicons name="search" size={28} color="#6200ee" onPress={() => fetchWeatherData(cityName)} />}
                    />
                }
            />
        </View>
    )
}

const styles = StyleSheet.create({
    textInput:{
        backgroundColor:'transparent',marginTop:'10%'
    }
})
