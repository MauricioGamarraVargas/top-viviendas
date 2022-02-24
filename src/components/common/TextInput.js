import React from 'react';
import { View } from 'react-native';
import { Input } from 'react-native-elements';
import { FontWeight, Size, Colors } from '../../constants/Styles';

const TextInput = (props) => {
  return (
    <View style={[props.containerStyle, styles.containerStyle]}>
      <Input 
        {...props}
        inputStyle={[props.inputStyle, styles.inputStyle]}
        labelStyle={[props.labelStyle, styles.labelStyle]}
        leftIconContainerStyle={[props.leftIconContainerStyle, styles.leftIconContainerStyle]}
        rightIconContainerStyle={[props.rightIconContainerStyle, styles.rightIconContainerStyle]}
        placeholderTextColor={props.placeholderTextColor? props.placeholderTextColor : Colors.primaryText}
        label={props.label}
        placeholder={props.placeholder}
        onChangeText={ props.onChangeText }
        value={props.value}
      />
    </View>
  )
}

const styles = {
  containerStyle: {
    width: '100%',
    marginBottom: 30,
  },
  inputStyle: {
    fontSize: Size.descriptionCard,
    fontWeight: FontWeight.descriptionCard,
    color: Colors.primaryText,
  },
  labelStyle: {
    fontSize: Size.titleCard,
    fontWeight: FontWeight.titleCard,
    color: Colors.primaryText,
  },
  placeholderStyle: {
    placeholderTextColor: Colors.primaryText
  }
};

export { TextInput };