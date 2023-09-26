import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from  '@react-navigation/native'
import Main from './Screens/Main'
import ProductDetail from './Screens/ProductDetail'
import Cart from './Screens/Cart'
import Login from './Screens/Login'
import Signup from './Screens/Signup'
import Checkout from './Screens/Checkout'

const Stack = createStackNavigator()
const AppNavigator = () => {
  return (
    <>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='Main'
          component={Main}
          options={{headerShown:false}}
        />

        <Stack.Screen
          name='ProductDetail'
          component={ProductDetail}
          options={{headerShown:false}}
        />

        <Stack.Screen
          name='Cart'
          component={Cart}
          options={{headerShown:false}}
        />

        <Stack.Screen
          name='Login'
          component={Login}
          options={{headerShown:false}}
        />

        <Stack.Screen
          name='Signup'
          component={Signup}
          options={{headerShown:false}}
        />

        <Stack.Screen
          name='Checkout'
          component={Checkout}
          options={{headerShown:false}}
        />

        
      </Stack.Navigator>
    </NavigationContainer>
    </>
  )
}

export default AppNavigator