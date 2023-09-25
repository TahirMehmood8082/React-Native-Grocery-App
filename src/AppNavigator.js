import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from  '@react-navigation/native'
import Main from './Screens/Main'

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
        >

        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
    </>
  )
}

export default AppNavigator