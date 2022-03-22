import React from "react";
import { View, Text, Image, TouchableOpacity} from "react-native";
import { Icon } from "react-native-elements";
import { Padding, Colors, Size, FontWeight } from "../../constants/Styles";
import { Button } from "./Button";
import { Title } from "./Title";

const ExplorerItem = (props) => {
  return (
    <View style={styles.containerStyle}> 
    <View style={styles.containerImage}>    
      <Image 
        style={styles.imageStyle}
        source={require('../../../assets/images/home.png')}
      />
      <View style={styles.apartmentHouseContainerStyle}>
        <Text style={styles.apartmentHouseTextStyle}>DEPARTAMENTO 117.91 m</Text>
      </View>
      <View style={styles.saleRentcontainerStyle}>
        <Text style={styles.saleRentTextStyle}>VENTA</Text>
      </View>
      <View style={styles.numberPhotosContainer}>
        <Text style={styles.numberPhotosTextStyle}>4 Fotos</Text>
      </View>
      <View style={styles.priceContainer}>
        <Text style={styles.priceTextStyle}>$us. 70746</Text>
      </View>
    </View>
      <View style={styles.specsStyle}>
        <Title style={styles.titleSyle}>Casa en venta nuevo</Title>
        <Text style={styles.autorStyle}>Publicado por: Ector Gonzales</Text>
        <Text style={styles.descriptioStyle}>Casa en venta en venta con 6 dormitorios totalmente todo nuevo y amoblado cuenta 
          con parrillero, sauna, piscina , y todas las comodidades de ultima generación. 
        </Text>
      </View>
      <View style={{flexDirection: "row", justifyContent: "space-around"}}>
        <View>
          <View>
          <Text>4</Text>
          </View>
          <View >
          <Icon
            name='bed-sharp'
            type='ionicon'
            size={Size.iconInput}
            color="black"
          />
          </View>
        </View>
        <View>
          <View>
            <Text>1</Text>
          </View>
          <View>
            <Icon
              name='car-sport-sharp'
              type='ionicon'
              size={Size.iconInput}
              color="black"
            />
          </View>
        </View>
        <View>
          <View >
            <Text>1</Text>
          </View>
          <View>
            <Icon
              name='water-sharp'
              type='ionicon'
              size={Size.iconInput}
              color="black"
            />
          </View>
        </View>
        <View>
          <View >
            <Text>1</Text>
          </View>
          <View>
            <Icon
              name='flash-sharp'
              type='ionicon'
              size={Size.iconInput}
              color="black"
            />
          </View>
        </View>
        <View>
          <View >
            <Text>1</Text>
          </View>
          <View>
            <Icon
              name='flame-sharp'
              type='ionicon'
              size={Size.iconInput}
              color="black"
            />
          </View>
        </View>
      </View>
        <Button style={styles.buttonStyle} onPress={() => props.onPressHomeDetails()}>Mas información</Button>
    </View>
  )
}

const styles = {
  containerStyle: {
    borderRadius:10,
    overflow: 'hidden'
  },
  containerImage: {
    height: 220
  },
  imageStyle: {
    flex: 1,
    resizeMode: 'cover',
    width: "100%"
  },
  specsStyle: {
    marginHorizontal: 20,
  },
  apartmentHouseContainerStyle: {
    position: "absolute", 
    left: 0
  },
  apartmentHouseTextStyle: {
    color:"white", 
    backgroundColor: 'rgba(66, 66, 66, 0.8)', 
    padding:7
  },
  saleRentcontainerStyle: {
    position: "absolute", 
    left: 0, 
    top: 38
  },
  saleRentTextStyle: {
    color:"white", 
    backgroundColor: 'rgba(66, 66, 66, 0.8)',  
    padding: 7
  },
  numberPhotosContainer: {
    position: "absolute", 
    right: 0, 
    top:0, 
    margin: 5
  },
  numberPhotosTextStyle: {
    color:"white", 
    backgroundColor: Colors.backgroundTertirary, 
    padding: 2, 
    borderRadius:5, 
    overflow: 'hidden'
  },
  priceContainer: {
    position: "absolute", 
    right: 0, 
    top: 60
  },
  priceTextStyle: {
    color:"white", 
    backgroundColor: Colors.secundaryGreen, 
    padding: 7
  },
  titleSyle: {
    color: Colors.secondaryText,
    fontSize: Size.titleTile,
    fontWeight: FontWeight.header,
    marginTop: 10
  },
  autorStyle: {
    color: Colors.tertiaryText,
    marginVertical:5
  },
  descriptioStyle:{
    color: Colors.quaternaryText,
    marginVertical: 5
  },
  buttonStyle: {
    borderRadius: 10,
    backgroundColor: Colors.secundaryGreen,
    padding: 10,
    marginLeft: 20,
    marginRight: 20,
    marginVertical: 20
  }
}

export { ExplorerItem };