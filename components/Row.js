import React from 'react'
import { View, Text } from 'react-native'
import PropTypes from 'prop-types';
import moment from 'moment'
import 'moment/locale/fr'

moment.locale('fr')
export default class Row extends React.Component{

    
    static propTypes ={
        day: PropTypes.object,
        index1: PropTypes.number
    }

    day() {
        let day = moment(this.props.day.dt * 1000).format('ddd')
            return (
            <Text>{ day.toUpperCase() }</Text>
        )
    }
    date() {
        let day = moment(this.props.day.dt * 1000).format('DD/MM/YYYY')
        return (
            <Text>{ day }</Text>
        )
    }
    temperature() {
        const kelvinToCelsius = parseInt((this.props.day.temp.day) -  273.15,10) ;
        return(
            <Text>{ kelvinToCelsius }</Text>
        )
    }

    render() {
        return(
            <View>   
            <Text> {this.day()} {this.date()}</Text> 
            <Text>{this.temperature()} °C </Text>
            </View> 

        )
    }
}