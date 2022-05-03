import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'

import HomeScreen from './screens/HomeScreen';
import ISSLocationScreen from './screens/ISSLocationScreen';
import MeteorScreen from './screens/MeteorScreen';

const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator intitalRouteName = 'Home'>
        <Stack.Screen
          name = 'Home' component = {HomeScreen}
        />
        <Stack.Screen
          name = 'ISSLocation' component = {ISSLocationScreen}
        />
        <Stack.Screen
          name = 'Meteor' component = {MeteorScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


