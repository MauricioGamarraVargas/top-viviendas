import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";

const ButtonBottom = (props) => {
  return(
    <TouchableOpacity style={styles.container} onPress={props.onPress}>
      <View>
        <Image style={styles.imageStyle} source={require("../../../assets/images/isotipo.png")}/>
      </View>
      <View style={styles.textContainer}>
        <View>          
          <Text style={styles.textStyle}>Corredor Topviviendas</Text>
        </View>
        <View>          
          <Text style={styles.textStyle}>Topviviendas</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = {
  container: {
    flexDirection: "row",
    width: "100%",
    backgroundColor: "green",
    height: 70,
    alignItems: "center",
    position: "absolute",
    bottom: 0
  },
  imageStyle: {
    width: 35,
    height: 35,
    margin:10
  },
  textContainer: {
    marginLeft: 20
  },
  textStyle: {
    color: "#fff"
  }
};

export {ButtonBottom};