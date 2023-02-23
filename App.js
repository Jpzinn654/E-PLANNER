import React from "react";
import { StatusBar } from "react-native";
import { NavigationContainer } from '@react-navigation/native'

import Routes from "./src/Navigation/StackNavigation";


export default function App() {
  return (
    <NavigationContainer>
     <StatusBar backgroundColor={'#2C3C51'} barStyle="light-content"/>
      <Routes /> 
    </NavigationContainer>
  )
}
