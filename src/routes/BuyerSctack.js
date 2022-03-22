import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BuyerScreen from "../screens/buyer/BuyerScreen";

const Stack = createNativeStackNavigator();

const BuyerStack = () => {
  return(
    <Stack.Navigator>
      <Stack.Screen 
        name="buyer"
        component={BuyerScreen}
        options={{
          title: 'Corredor', 
        }}
      />
    </Stack.Navigator>
  );
}

export default BuyerStack;