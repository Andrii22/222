import * as React from 'react';
import MapView from 'react-native-maps';
import { Marker } from 'react-native-maps';
import { Text, View, StyleSheet, Button, Image, Dimensions} from 'react-native';
import Constants from 'expo-constants';


const latitude = 50.513373;
const longitude = 30.491876;
function LocationScreen({navigation}) {
  return (
    
    <View style={styles.container}>
      <MapView style={styles.map} region={{
      latitude: latitude,
      longitude: longitude,
      latitudeDelta: 0.01,
      longitudeDelta: 0.01,
    }}>
      
      <Marker coordinate={{ latitude : latitude , longitude : longitude }}></Marker>
      </MapView>
    </View>
  );
}

export default LocationScreen;

const styles = StyleSheet.create({
  container: {
    
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});