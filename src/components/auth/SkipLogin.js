import React from "react";
import { View } from "react-native";
import { Colors, Size, Padding } from '../../constants/Styles';
import { Button } from '../common';

const SkipLogin = () => {
  return(   
    <View style={styles.container}>
      <Button style={styles.buttonStyle}>{`Omitir por Ahora >`}</Button>
    </View>
  );
}

const styles = {
  container: {
    position: 'absolute', 
    bottom: 0,
    width: '100%'
  },
  buttonStyle: {
    backgroundColor: Colors.primaryGray,
    borderRadius: 0,
    marginLeft: 0,
    marginRight: 0,
    padding: 10
  },
}

export default SkipLogin;