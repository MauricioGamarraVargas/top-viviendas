import React from "react";
import { View, Text } from "react-native";
import { Colors } from '../../constants/Styles';
import { Button } from "../common";
import AccountData from './AccountData';

const Account = () => {
  return(
    <View style={styles.container}>
      <AccountData />
      <View style={styles.containerButtonStyle}>
        <Button>Editar cuenta</Button>
      </View>
      <View style={styles.containerButtonStyle}>
        <Button style={styles.signOutButtonStyle} textStyle={styles.textStyle}>Cerrar sesión </Button>
      </View>
    </View>
  );
}

const styles = {
  container: {
    width: '100%',
  },
  containerButtonStyle: {
   marginLeft: 60,
   marginRight: 60,
   marginTop: 20
  },
  signOutButtonStyle: {
    backgroundColor: Colors.primaryWhite,
    borderWidth: 1,
    borderColor: Colors.primaryGray
  },
  textStyle: {
    color: Colors.primaryGray
  }
}

export default Account;