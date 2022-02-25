import React, { Component } from 'react';
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, ScrollView, StatusBar } from 'react-native';
import Auth from './src/components/auth/Auth';
import Account from './src/screens/AccountScreen'

export default function App() {
  return (
    <>
      <StatusBar style='auto'/>
      <Account />
    </>  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'red',
  }
});
