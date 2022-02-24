import React from 'react';
import { Text } from 'react-native';
import { Colors, Size } from '../../constants/Styles';

const Title = (props) => {
  return (
    <Text style={[styles.titleStyle, props.style]}>{props.title}</Text>
  );
}

const styles = {
  titleStyle: {
    fontSize: Size.titleCard,
    color: Colors.primaryText,
    //fontFamily: 'San-Francisco-Medium'
  }
}
export { Title }