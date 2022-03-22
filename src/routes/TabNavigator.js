import React from "react";
import { Icon } from "react-native-elements";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MapNavigator, HomesNavigator } from "./HomeStack";

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={{
      headerShown: false,
    }}>
      <Tab.Screen 
        name="Mapa" 
        component={MapNavigator}      
        options={{
          tabBarIcon: () => (
            <Icon 
              name='ios-map'
              type='ionicon' 
            />
          )
        }}
      />
      <Tab.Screen 
        name="Lista" 
        component={HomesNavigator} 
        options={{
          tabBarIcon: () => (
            <Icon 
              name='ios-list'
              type='ionicon' 
            />
          )
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;