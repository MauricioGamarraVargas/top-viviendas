import React, { Component } from 'react';
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, ScrollView, StatusBar } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Auth from './src/components/auth/Auth';
import { Formik } from 'formik';
//import { TextInput } from 'react-native';

export default function App() {
  return (
    <>
      <StatusBar style='auto'/>
      <Auth />
    </>  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'red'
  }
});
