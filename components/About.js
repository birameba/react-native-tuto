import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import  style from '../Style'

export default class About extends React.Component{

    search() {
        this.props.navigation.navigate('Search')
      }
    render() {
        return (
            <View style={style.View}>
            <Text style={style.title}> A propos de moi</Text>
            <Text> Birame Ba</Text>
            <Button color={style.color} onPress={() => this.search()} title="Rechercher une Ville"/> 
            </View>
        )
    }
}
 