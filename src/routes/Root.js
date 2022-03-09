import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import AccountStack from './AccountStack';
import AuthStack from './AuthStack';
import 'react-native-gesture-handler';

const Drawer = createDrawerNavigator();  

const Root = () => (
  <Drawer.Navigator initialRouteName="account">
    <Drawer.Screen 
      name="account"
      options={{ drawerLabel: 'Account',headerShown: false }}
      component={AccountStack}
    /> 
    <Drawer.Screen
      name="SecondPage"
        options={{ drawerLabel: 'Second page Option',headerShown: false }}
      component={AuthStack} />
  </Drawer.Navigator>
)

export default Root;