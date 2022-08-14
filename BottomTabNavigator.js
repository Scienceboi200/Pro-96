import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Stopwatch from '../Screens/Stopwatch';
import Timer from '../Screens/Timer'



export const AppTabNavigator = createBottomTabNavigator({
  Stopwatch: {
    screen: Stopwatch,
    navigationOptions :{
      tabBarIcon : <Image source={require("../assets/stopwatch.png")} style={{width:20, height:20}}/>,
      tabBarLabel : "Stopwatch",
    }
  },
  Timer: {
    screen: Timer,
    navigationOptions :{
      tabBarIcon : <Image source={require("../assets/timer.png")} style={{width:20, height:20}}/>,
      tabBarLabel : "Timer"
    }
  }
});
