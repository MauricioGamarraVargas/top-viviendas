import React from "react";
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";

const Maps = () => {
  return(
     <View style={styles.container}>
      <MapView style={styles.map} 
        provider={PROVIDER_GOOGLE}
        initialRegion={{
          latitude: -17.414,
          longitude: -66.1653,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});

export { Maps };