import React from "react";
import { View, Text } from "react-native";

const FieldText = (props) => {
  return(
    <View style={[styles.filedTextStyle, props.style,]}>
      <Text style={[styles.textStyle, props.textStyle]}>{props.children}</Text>
    </View>
  );
}

const styles = {
  filedTextStyle: {
    backgroundColor: '#ededed',
    padding: 10,
    marginRight: 40,
    marginLeft: 40,
    marginBottom: 15
  },
  textStyle:{
    color: '#B6B8B9'
  }
}

export { FieldText };