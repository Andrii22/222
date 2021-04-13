import * as React from 'react';
import { Text, View, StyleSheet, Button, Image } from 'react-native';
import Constants from 'expo-constants';


function ProductScreen({navigation, route}) {
  return (
    <View style={styles.container}>
    <Image style={styles.logo} source={route.params.img}/>    
    <Text>{route.params.desc}</Text>  
      
    </View>
  );
}

export default ProductScreen;

const styles = StyleSheet.create({
  container: {
    
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  logo:{
    width: '100%',
    resizeMode: 'contain',
    marginBottom: 15,    
  }
});