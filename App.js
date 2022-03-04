import React, { Component } from 'react';
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, ScrollView, StatusBar } from 'react-native';
import Auth from './src/components/auth/Auth';
import Account from './src/screens/AccountScreen';
import {Card, ExplorerItem} from "./src/components/common";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar />
      <Card>
        <ExplorerItem />
      </Card>
    </View>
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

