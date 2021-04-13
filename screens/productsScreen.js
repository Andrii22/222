import * as React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import Constants from 'expo-constants';


function ProductsScreen({navigation, route}) {  
  return (
    <View style={styles.container}>
      {route.params.products.map(product => (
      <Button
        title={product.title}
        onPress={() => {navigation.navigate('Product', {name: product.title, desc: product.description, img: product.img})}}
      />
      ))}
      
    </View>
  );
}

export default ProductsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  logo:{
    width: '100%',
    resizeMode: 'contain',
  }
});