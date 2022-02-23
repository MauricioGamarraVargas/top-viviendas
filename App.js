import React, { Component } from 'react';
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, ScrollView, StatusBar } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Login from './src/components/auth/Login'
import { Formik } from 'formik';
//import { TextInput } from 'react-native';

export default function App() {
  return (
    <View>
      <StatusBar style='auto'/>
     <Text>Top viviendas</Text>
    </View>
        
      
  );
}

const styles = StyleSheet.create({
  

});
