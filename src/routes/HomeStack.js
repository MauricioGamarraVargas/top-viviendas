import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MapScreen from "../screens/map/MapScreen";
import HomesListScreen from "../screens/houses/HomesListScreen";
import HomeDetailScreen from "../screens/houses/HomeDetailScreen";

const Stack = createNativeStackNavigator();

const screenOptionStyle = {
  headerStyle: {
    backgroundColor: "#9AC4F8",
  },
  headerTintColor: "white",
  headerBackTitle: "Back",
};

const MapNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      {/* options={{headerShown: false}} */}
      <Stack.Screen name="mapView" component={MapScreen} /> 
    </Stack.Navigator>
  );
}

const HomesNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: true}}>
      <Stack.Screen name="listHomes" component={HomesListScreen} />
      <Stack.Screen name="homeDetail" component={HomeDetailScreen}  />
    </Stack.Navigator>
  );
}

export { MapNavigator, HomesNavigator };