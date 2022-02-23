import React from 'react';
import { View } from 'react-native';
import { Input } from 'react-native-elements';
import { FontWeight, Size, Colors } from '../../constants/Styles';

const TextInput = (props) => {
  return (
    <View style={styles.containerStyle}>
      <Input 
      {...props}
      inputStyle={ styles.inputStyle}
      labelStyle={styles.labelStyle}
      // label={props.label}
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
    alignItems: 'center',
    justifyContent: "center"
  },
  inputStyle: {
    fontSize: Size.descriptionCard,
    fontWeight: FontWeight.descriptionCard,
    color: Colors.secondaryText
  },
  labelStyle: {
    fontSize: Size.titleCard,
    fontWeight: FontWeight.titleCard,
    color: Colors.primaryText
  }
};

export { TextInput };
