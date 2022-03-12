import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AuthScreen from "../screens/auth/AuthScreen";

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return(
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen 
        name="auth"
        component={AuthScreen}
        options={{
          title: 'Login', 
        }}
      />
    </Stack.Navigator>
  );
}

export default AuthStack;