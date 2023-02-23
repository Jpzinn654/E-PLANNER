import React from "react";

import { createStackNavigator } from '@react-navigation/stack'

import Home from "../Screens/Homes/Home";
import Login from "../Screens/LoginHomes/login";
import Register from "../Screens/LoginHomes/register";
import PrincipalHome from "../Screens/LoginHomes/PrincipalHome";
import Categorias from "../Screens/Homes/adcCat";

const Stack = createStackNavigator();

export default function Routes() {
  return (
      <Stack.Navigator initialRouteName="PrincipalHome">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{headerShown:false}}
        />
        <Stack.Screen
          name="Login"
          component={Login} 
          options={{headerShown:false}}
          />
        <Stack.Screen
        name="Register"
        component={Register}
        options={{headerShown:false}}
        />
        <Stack.Screen
        name="PrincipalHome"
        component={PrincipalHome}
        options={{headerShown:false}}
        />
        <Stack.Screen
        name="AdicionarCategorias"
        component={Categorias}
        options={{headerShown:false}}
        />
      </Stack.Navigator>
  )
}
