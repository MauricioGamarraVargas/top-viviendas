import React from 'react';
import { View, Text, Image,  SafeAreaView, ScrollView } from 'react-native';
import LoginEmailForm from './LoginEmailForm';

const LoginEmail = (props) => {
  return(
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image style={styles.logo}
          source={require('../../../assets/images/logo.png')}
        />
      </View>
      <LoginEmailForm navigation={props.navigation}/>
    </View>
  );
}

const styles = {
  container: {   
    width: '80%',
  },
  imageContainer: {
    marginTop: 60,
    alignItems: 'center',
  },
  logo: {
    marginBottom: 80
  }
}

export default LoginEmail;