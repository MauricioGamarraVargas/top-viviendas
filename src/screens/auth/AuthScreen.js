import React, {Component} from "react";
import { View, Text } from "react-native";
import AuthTemp from "../../components/auth/AuthTemp";

class AuthScreen extends Component {
  render() {
    return(
      <View>
        <AuthTemp navigation={this.props.navigation}/>
      </View>
    )
  }
}

export default AuthScreen;