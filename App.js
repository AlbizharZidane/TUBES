import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { Login, MoreInfo, Register, Verify, Welcome } from './Screens';
import TabBar from "./components/TabBar";
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='Login'
      >
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="Register"
          component={Register}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="Verify"
          component={Verify}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="MoreInfo"
          component={MoreInfo}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="Welcome"
          component={Welcome}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="MainMenu"
          component={TabBar}
          options={{ headerShown: false, animation: 'fade' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};