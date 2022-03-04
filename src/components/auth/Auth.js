import React from 'react';
import { View, ScrollView, Text } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Colors } from '../../constants/Styles';
import LoginEmail from './LoginEmail';
import SkipLogin from './SkipLogin';

const Auth = () => {
  return(
    <View style={styles.container}>  
    <ScrollView>
      <View style={styles.loginEmailStyle}>
        <LoginEmail />
      </View>
    </ScrollView>
      <SkipLogin/>
    </View>
  );
}

const styles = {
  container: {
    flex: 1,
    backgroundColor: Colors.backgroundPrimary,
  },
  loginEmailStyle:{
    alignItems: 'center',
    justifyContent: 'center',
  },
  skipLoginStyle: {
    width: '100%',
    position: 'absolute',
    bottom:0
  } 
}

export default Auth;