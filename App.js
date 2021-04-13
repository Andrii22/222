import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import { NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import MainScreen from './screens/mainscreen';
import ProductsScreen from './screens/productsScreen';
import ProductScreen from './screens/productScreen';
import LocationScreen from './screens/locationScreen';



const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Main">
        <Stack.Screen name="Main" component={MainScreen} options={{title: ''}}/>
        <Stack.Screen name="Products" component={ProductsScreen} options={({route})=>({title: route.params.name})}/>
        <Stack.Screen name="Product" component={ProductScreen} options={({route})=>({title: route.params.name, desc: route.params.desc, img: route.params.img})}/>
        <Stack.Screen name="Location" component={LocationScreen} options={{title: 'Де нас знайти'}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

