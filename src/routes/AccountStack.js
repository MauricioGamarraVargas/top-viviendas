import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AccountScreen from "../screens/account/AccountScreen";
import AccountTempScreen from "../screens/account/AccountTempScreen";

const Stack = createNativeStackNavigator();

const AccountStack = () => {
  return(
    <Stack.Navigator>
      <Stack.Screen 
        name="perfil"
        component={AccountScreen}
        options={{
          title: 'Perfil', 
        }}
      />
    </Stack.Navigator>
  );
}

export default AccountStack;