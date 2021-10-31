import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Homepage from './component/pages/Homepage';
import Login from './component/pages/Login'
const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          options={{ headerShown: false }}
          component={Login}
        />
        <Stack.Screen
          name="Home"
          options={{ headerShown: false }}
          component={Homepage}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
