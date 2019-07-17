import React from 'react';
import { Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // 6.2.2
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import About from './components/About';
import Search from './components/Search';


export default createAppContainer(
  createBottomTabNavigator(
    {
      About: { screen: About },
      Search: { screen: Search },
    },
    {
      tabBarOptions:
      {
        showIcon : true,
        showLabel : false,  
        //activeTintColor : 'white',
        //inactiveTintColor: 'white',
        activeBackgroundColor: 'tomato',
        inactiveBackgroundColor: 'gray'
        
        
      }
    }
  )
);
