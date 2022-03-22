import React from "react";
import {View, Text} from "react-native";
import { Icon } from "react-native-elements";
import { Colors, Size, FontWeight } from "../../constants/Styles";
import { Title, ButtonBottom} from "../common";

const HomeProfile = () => {
  return(
    <View style={styles.container}>
      <View style={styles.headerStyle}>
        <Title style={styles.titleStyle}>
          Departameto a estrenar en venta tipo "F" edificio Forataleza 1
        </Title>
        <Title style={styles.subTitleStyle}>
          73 m2 DEPARTAMENTO EN VENTA $us. 48500
        </Title>
      </View>
      <View style={styles.stateHomeStyle}>
        <Title style={{color:Colors.secundaryGreen}}>
          Estado: disponible 
        </Title>
        <Title style={{color: Colors.secundaryGreen}}>
          Publicado el 2022-03-15 
        </Title>
      </View>
      <View>
        <Title style={{color: Colors.secondaryText}}>Direccion Av. villazon km 4 zona puntiti</Title>
      </View>
      <View>
        <View>
        <Title style={{color: Colors.secundaryGreen}}>Caracteristicas</Title>
        </View>
        <View>
          <View style={{flexDirection: "row", justifyContent: "space-between"}}>
            <Icon
              name='bed-sharp'
              type='ionicon'
              size={Size.iconInput}
              color="green"
            />
            <View style={{flexDirection: "row", borderBottomColor:Colors.secundaryGreen, borderBottomWidth: 0.5, alignSelf:"flex-end"}}>
              <Title style={{color: Colors.secundaryGreen, marginRight: "30%"}}>DORMITORIOS</Title>
              <View style={{backgroundColor: Colors.secundaryGreen, borderRadius: 2, padding:1}}>
                <Title style={{color: Colors.primaryText, }}>1</Title>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = {
  container: {
    paddingHorizontal: 15,
    paddingTop: 30,
  },
  headerStyle: {
    flexDirection: "row"
  },
  titleStyle: {
    width:"70%",
    padding: 5,
    color: Colors.secondaryText, 
    fontWeight: FontWeight.header, 
    fontSize: Size.header
  },
  subTitleStyle: {
    padding: 5,
    width:"30%", 
    color: Colors.secundaryGreen
  },
  stateHomeStyle: {
    width:"70%",
    padding: 5
  }
}

export default HomeProfile;