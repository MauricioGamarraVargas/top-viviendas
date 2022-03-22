import React, {Component} from "react";
import { View, Text } from "react-native";
import Account from '../../components/account/Account';

class AccountScreen extends Component {
  
  render() {
    return(
      <View>
        <Account navigation={this.props.navigation}/>
      </View>
    )
  }
}

export default AccountScreen;