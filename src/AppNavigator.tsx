import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import DetailExample from './Screens/Detail/DetailExample';
import DetailExample2 from './Screens/Detail/DetailExample2';
import StartScreen from './Screens/StartScreen';
import Main from './Stack/Main';

export type RootStackParamList = {
  Start: undefined;
  Main: undefined;
  DetailExample: { id: number; name: string; location: string };
  DetailExample2: { id: number; name: string; location: string };
};

const Stack = createStackNavigator<RootStackParamList>();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Start"
        screenOptions={{
          headerShown: false,
          gestureEnabled: true,
        }}
      >
        <Stack.Screen name="Start" component={StartScreen} />
        <Stack.Screen name="Main" component={Main} />
        <Stack.Screen name="DetailExample" component={DetailExample} />
        <Stack.Screen name="DetailExample2" component={DetailExample2} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
