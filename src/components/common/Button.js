import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { Colors, Padding } from '../../constants/Styles';
import { Title } from './Title';

const Button = (props) => {
  return (
    <TouchableOpacity style={[styles.buttonStyle, props.buttonStyle]}>
      <View>
        <Title style={[styles.textStyle]} title={props.children}/>
      </View>
    </TouchableOpacity>
  );
}

const styles = {
  buttonStyle: {
    borderColor: Colors.primaryBlue,
    borderWidth: 1,
    borderRadius: 5,
    marginLeft: 5,
    marginRight: 5
  },
  textStyle: {
    alignSelf: 'center',
    color: Colors.primaryBlue,
    paddingTop: Padding.buttonTop,
    paddingBottom: Padding.buttonBottom,
    paddingLeft: 0,
    marginTop: 0
  },
}

export { Button }
