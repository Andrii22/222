import * as React from 'react';
import { Text, View, StyleSheet, Image, Button } from 'react-native';
import Constants from 'expo-constants';

import {drinks, food} from '../src/data';


function MainScreen({navigation}) {
  return (
    <View style={styles.container}>
    
      <Image style={styles.logo} source={require('../assets/coffee_logo.png')}/>
      <Button
        title="Напої"
        onPress={() => {navigation.navigate('Products', {name: 'Напої', products: drinks});}}
      />
      <Button
        title="Страви"
        onPress={() => {navigation.navigate('Products', {name: 'Страви', products: food});}}
        
      />
      <Button
        title="Де нас знайти"
        onPress={() => {navigation.navigate('Location')}}
      />
    </View>
  );
}

export default MainScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  logo:{
    width: '100%',
    resizeMode: 'contain',
  }
});