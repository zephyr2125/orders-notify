import React from 'react'
import { Provider } from 'react-native-paper'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { theme } from './src/core/theme'
import {
  MainScreen,
  KeyScreen,
  NotifyScreen
} from './src/screens'

const Stack = createStackNavigator()

export default function App() {
  return (
    <Provider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="KeyScreen"
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="KeyScreen" component={KeyScreen} />
          <Stack.Screen name="NotifyScreen" component={NotifyScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  )
}
