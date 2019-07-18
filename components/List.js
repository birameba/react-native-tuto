import React from 'react'
import {Text, ActivityIndicator, ListView, FlatList} from 'react-native'
import axios from 'axios'
import style from '../Style'
import Row from './Row'

export default class List extends React.Component
{
    static navigationOptions= ({navigation}) =>
    {
        return{
            title: `Météo / ${navigation.state.params.city}`
        }
    }

    constructor(props)
    {
        super(props)
        this.state= {
            city: this.props.navigation.state.params.city,
            report: null
        }
        this.fetchweather()
    }
    fetchweather()
    {
     
    console.log('fetching weather')

    const ville = this.state.city;

    const pays = 'sn';

    const apiKey = 'eea20ef96c66002fdb5067fb537aa6d4'

    const url = `https://samples.openweathermap.org/data/2.5/forecast/daily?lat=35&lon=139&cnt=10&appid=b1b15e88fa797225412429c1c50c122a1`

    const headers = {}

    axios.get(url)

    .then((response)=>
    {

      const list = response.data.list
    
      this.setState({report : list})

    }, error=>
    {

    console.log("error", JSON.stringify(error))

    })
    }

    renderListItem (item, index) {
        return (
        <Text>{item.key}</Text>
        )
    }

    render()
    {
        
            if(this.state.report=== null)
            {
                return(
                    <ActivityIndicator color={style.color}  size="large"/>
                )
            }
            else{
                //const fl= new FlatList.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
                    return(
                     <FlatList
                        data={this.state.report}
                        renderItem={({item, index, separators}) => (
                            <Row day={item} index1={parseInt(index,10)}/>
                            // <Text>
                            //     {item.temp.day}
                            // </Text>
                          
                          )}
                        />
                            )
                }
                
    }
}