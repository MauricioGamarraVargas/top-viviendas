import React, { Component } from "react";
import "react-native-gesture-handler";
import { createDrawerNavigator } from "@react-navigation/drawer";
import AccountStack from "./AccountStack";
import AuthStack from "./AuthStack";
import TabNavigator  from "./TabNavigator";
import BuyerStack from "./BuyerSctack";

const Drawer = createDrawerNavigator();  

const Root = () => (
  <Drawer.Navigator initialRouteName="login">
    <Drawer.Screen
    options={{
      drawerItemStyle: {display: "none"},
      headerShown: false
    }}
    name="login"
    component={AuthStack} 
    />
    <Drawer.Screen 
      name="home" 
      options={{ drawerLabel: 'Ofertas',headerShown: false }}
      component={TabNavigator} />
    <Drawer.Screen 
      name="accountScreen"
      options={{ drawerLabel: 'Cuenta',headerShown: false }}
      component={AccountStack}
    />   
    <Drawer.Screen
      options={{
        drawerItemStyle: {display: "none"},
        headerShown: false
      }}
      name="buyer"
      component={BuyerStack}
    />
  </Drawer.Navigator>
);

export default Root;