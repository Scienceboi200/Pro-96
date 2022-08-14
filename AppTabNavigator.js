import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import StopwatchScreen from '../Screens/Stopwatch'
import TimerScreen from '../Screens/Timer'



export const AppTabNavigator = createBottomTabNavigator({
   Stopwatch: {
    screen: StopwatchScreen,
    navigationOptions :{
      tabBarIcon : <Image source={require("../assets/stopwatch.png")} 
      style={{width:20, height:20}}/>,
      tabBarLabel : "Stopwatch",
    }
  },
  Timer: {
    screen: TimerScreen,
    navigationOptions :{
      tabBarIcon : <Image source={require("../assets/timer.png")} 
      style={{width:20, height:20}}/>,
      tabBarLabel : "Timer",
    }
  }
});
