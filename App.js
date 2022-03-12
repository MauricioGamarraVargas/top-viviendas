import React, { Component } from 'react';
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, ScrollView, StatusBar } from 'react-native';
// import Auth from './src/components/auth/Auth';
// import Account from './src/screens/account/AccountScreen';
import {Card, ExplorerItem} from "./src/components/common";
import AccountStack from './src/routes/AccountStack';
import { NavigationContainer } from '@react-navigation/native';
import AuthStack from './src/routes/AuthStack';
import 'react-native-gesture-handler';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Root from './src/routes/Root.js';

const Drawer = createDrawerNavigator();  
const Tab = createBottomTabNavigator();

function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home!</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Root />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: 'white',
    //justifyContent: "center",
    //alignItems: "center",
  },
  scrollView: {
    backgroundColor: 'pink',
    marginHorizontal: 20,
  },
});

