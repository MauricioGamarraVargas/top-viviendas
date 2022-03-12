import React, {Component} from "react";
import { View, Text } from "react-native";
import Auth from "../../components/auth/Auth";

const AuthScreen  = (props) => {
  return (
    <Auth navigation={props.navigation}/>
  );
}

export default AuthScreen;