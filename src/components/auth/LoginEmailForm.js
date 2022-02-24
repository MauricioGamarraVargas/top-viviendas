import React from "react";
import { View, Text } from "react-native";
import { Icon } from "react-native-elements";
import { Formik } from "formik";
import { Colors, Size,FontWeight, Padding } from '../../constants/Styles';
import { TextInput, Button } from '../common';

const LoginEmailForm = () => {
  
  const signInSignUpButtonUser = (props) => {
    return(
      <View>
        <Button style={styles.forgotPasswordButtonStyle} textStyle={styles.forgotPasswordTextStyle}>Olvidaste tu contraseña?</Button>
        <Button style={styles.buttonStyle}>Continuar</Button>
        <Button style={styles.forgotPasswordButtonStyle} textStyle={styles.forgotPasswordTextStyle}>Crear cuenta nueva</Button>
      </View>
    );
  }

  return(
    <View>
      <Formik
        initialValues={{email: '', password: ''}}
      >
        {(props) => (  
        <>
          <View>
            <TextInput
              label='Usuario'
              inputStyle={styles.inputStyle}
              placeholder="Nombre de usuario o correo"
              value={props.values.email}
              onChangeText={props.handleChange('email')}
              leftIcon={
                <Icon
                name='ios-mail'
                type='ionicon'
                size={Size.iconInput}
                color={Colors.primaryText}
                />
              }
              leftIconContainerStyle={styles.iconContainerStyle}
            />
            <TextInput
              inputStyle={styles.inputStyle}
              placeholder="******"
              label='Contraseña'
              value={props.values.password}
              onChangeText={props.handleChange('password')}
              secureTextEntry
              leftIcon={
                <Icon
                name='lock-closed'
                type='ionicon'
                size={Size.iconInput}
                color={Colors.primaryText}
                />
              }
              leftIconContainerStyle={styles.iconContainerStyle}
            />
          </View> 
          {signInSignUpButtonUser(props)}
        </>        
      )}
      </Formik>
    </View>
  );
}

const styles = {
  inputStyle: {
    fontSize: Size.descriptionCard,
    fontWeight: FontWeight.descriptionCard,
    color: Colors.secondaryText
  },
  placeholderStyle:{
    placeholderTextColor:'blue'
  },
  forgotPasswordButtonStyle: {
    backgroundColor:'transparent',
    borderRadius: 0,
    margin: 25
  },
  forgotPasswordTextStyle: {
    textDecorationLine: 'underline'
  },
  buttonStyle: {
    padding:5
  },
  iconContainerStyle: {
    paddingRight: Padding.headerLeft,
  }
}

export default LoginEmailForm;