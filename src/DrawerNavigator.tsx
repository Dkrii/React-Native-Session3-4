import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import TabNavigator from './TabNavigator';
import Setting from './Screens/DrawerScreen/Setting';

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator
      initialRouteName="HomeTab"
      screenOptions={{
        headerStyle: {
          backgroundColor: '#044884ff',
        },
        headerTintColor: '#ffffffff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        drawerStyle: {
          backgroundColor: '#ffffffff',
          width: 280,
        },
        drawerActiveTintColor: '#044884ff',
        drawerInactiveTintColor: '#878b94ff',
        drawerLabelStyle: {
          fontSize: 16,
          fontWeight: '600',
        },
      }}
    >
      <Drawer.Screen
        name="HomeTab"
        component={TabNavigator}
        options={{
          title: 'Travel App',
          drawerLabel: 'Home & Profile',
        }}
      />
      <Drawer.Screen
        name="Setting"
        component={Setting}
        options={{
          title: 'Settings',
          drawerLabel: 'Pengaturan',
        }}
      />
    </Drawer.Navigator>
  );
}
