import React from "react";
import { TouchableOpacity, View } from "react-native";
import { Colors, Padding } from '../../constants/Styles';
import { Title } from './Title';

const Button = (props) => {
  return (
    <TouchableOpacity style={[styles.buttonStyle, props.style]}>
      <View>
        {props.icon}
        <Title style={[styles.textStyle, props.textStyle]}>{props.children}</Title>
      </View>
    </TouchableOpacity>
  );
}

const styles = {
  buttonStyle: {
    borderColor: Colors.primaryBlue,
    backgroundColor:Colors.backgroundSecundary,
    borderRadius: 25,
    marginLeft: 5,
    marginRight: 5
  },
  textStyle: {
    alignSelf: 'center',
    color: Colors.primaryText,
    paddingTop: Padding.buttonTop,
    paddingBottom: Padding.buttonBottom,
    paddingLeft: 0,
    marginTop: 0
  },
}

export { Button }
