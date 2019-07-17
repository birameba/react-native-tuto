import React from 'react';
import { TextInput, View, Button  } from 'react-native';
import  style from '../Style'
import { createAppContainer, createStackNavigator, StackActions, NavigationActions } from 'react-navigation';
import List from './List';

class Search extends React.Component{
  static navigationOptions= {
    title: 'Rechercher une ville',
    tabBarIcon: ()=>{
        return < Image source={require('../icones/choix_loupe.png')} style={{width:20, height:20}} />
    }
}

    constructor(props) {
      super(props)
      this.state= {
        city: 'Dakar'
      };
  }
  setCity (city) {
    this.setState({city})
  }
   
  submit()
  {
    this.props.navigation.navigate('Result', {city: this.state.city});
  }

  render() {
    return (
      <View style={style.View}> 
      <TextInput
        style={style.input}
        onChangeText= {(text)=> this.setCity(text)}
        value= {this.state.city}
      />

      <Button color={style.color} onPress={()=> this.submit()} title="Rechercher"/>
      </View>
    );
  }
}

const navigationOptions= {
  headerStyle: style.header,
  headerTitleStyle: style.headerTitl
}

export default createStackNavigator(
  {
    Search: 
    {
      screen: Search,
      navigationOptions
    },
    Result: 
    {
      screen: List,
      navigationOptions
    }
  }
)
