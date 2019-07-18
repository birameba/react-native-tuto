import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import PropTypes from 'prop-types';
import moment from 'moment'
import 'moment/locale/fr'
import globalStyle from '../Style'
import { SizeClassIOS } from 'expo/build/ScreenOrientation/ScreenOrientation';

moment.locale('fr')
export default class Row extends React.Component{

    
    static propTypes ={
        day: PropTypes.object,
        index1: PropTypes.number
    }

    icon(size =50) {
        const type = this.props.day.weather[0].main.toLowerCase()
        let image
        switch (type) {
            case 'clear':
                image = require('../icones/clear-sun.png')
                break;
        
            case 'rain':
                image = require('../icones/rainy-weather-symbol.png')
                break;   
            
            case 'snow':
                image = require('../icones/snow-weather-symbol.png')
                break;  
            default:
                image = require('../icones/sunny-day.png')
        }
        return <View> 
         <Image source={image} style={style.imagess} />
         <Text> { type }</Text> 
         </View> 

    }

    day() {
        let day = moment(this.props.day.dt * 1000).format('ddd')
            return (
            <Text style={[style.bold, style.white]}>{ day.toUpperCase() }</Text>
        )
    }
    date() {
        let day = moment(this.props.day.dt * 1000).format('DD/MM/YYYY')
        return (
            <Text >{ day }</Text>
        )
    }
    temperature() {
        const kelvinToCelsius = parseInt((this.props.day.temp.day) -  273.15,10) ;
        return(
            <Text>{ kelvinToCelsius }</Text>
        )
    }

    render() {
        if(this.props.index1==0)
        {
            return(
                <View style={[style.view, style.flex, style.firstView]}> 
                  <View >
                  <Text style={{color: '#FFF'}}> {this.day()} {this.date()}</Text>
                  { this.icon(90) } 
                </View> 
                 <Text style={[style.temp, {fontSize:40}]}>{this.temperature()} °C </Text>
                </View> 
    
            )
        }
        else{
            return(
                <View style={[style.view, style.flex]}> 
                  <View style={style.flex}>
                  { this.icon() } 
                <Text style={{marginLeft: 10}}> {this.day()} {this.date()}</Text> 
                 </View> 
                 <Text style={style.temp}>{this.temperature()} °C </Text>
                </View> 
    
            )
        }
  
    }
}

const style = StyleSheet.create({
    white: {
        color: '#FFF'
    },
    bold: {
        fontWeight: 'bold'
    },
    view: {
        backgroundColor: globalStyle.color,
        borderWidth: 0,
        borderBottomWidth: 1,
        borderBottomColor: '#202340',
        paddingHorizontal: 20,
        paddingVertical: 10,
        justifyContent: 'space-between',
    },
    temp: {
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 24
    },
    imagess: {
        width: 50,
        height: 50,
        alignContent:"center"
    },
    flex: {
        flex: 1,
        flexDirection: 'row',
        alignItems: "center"
    },
    firstView: {
        backgroundColor: '#e54b65',
    }
})