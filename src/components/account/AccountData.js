import React from "react";
import { View, Text, Image } from "react-native";
import { Colors, Size } from "../../constants/Styles";
import { TextInput, FieldText, Title, Button } from "../common";

const AccountData = () => {
  return(
    <View>
      <View style={styles.imageContainerStyle}>
        <Image 
          source={require('../../../assets/defaultPhoto.png')}
        />
      </View>
      <View style={styles.nameContainer}>
        <Title style={styles.textNameStyle}>Rudy Chavez</Title>
      </View>
      <FieldText>Bolivia</FieldText>
      <FieldText>Cochabamba</FieldText>
      <FieldText>Rudy Chavez</FieldText>
      <FieldText>**********</FieldText>
      <FieldText>steve_rca@hotmail.com</FieldText>
    </View>
  );
}

const styles = {
  imageContainerStyle: {
    alignItems: 'center',
    margin: 35
  },
  nameContainer: {
    alignItems: 'center',
    marginBottom: 15
  },
  textNameStyle: {
    color: Colors.secundaryGray,
    fontSize: Size.titleHeader
  }
}

export default AccountData;