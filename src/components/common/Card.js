import React from "react";
import { View, Text, StyleSheet, Image} from "react-native";
import { Padding, Colors, Size, FontWeight } from "../../constants/Styles";

const Card = (props) => {
  return (
    <View style={styles.container}> 
      {props.children}    
    </View>
  )
}

const styles = {
  container: {
    borderColor: Colors.borderPrimary,
    backgroundColor: "white",
    marginTop:60,
    width: "90%",
    borderRadius:10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    alignSelf: "center"
  },
};


export { Card };