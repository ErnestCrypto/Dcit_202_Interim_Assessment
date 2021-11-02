import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,Image } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import Login from "./app/screens/Login";
import Home from "./app/screens/Home"; 
import Cart from "./app/screens/Cart"; 
import Classic from "./app/screens/Classic"; 
import Sports from "./app/screens/Sports"; 
import Outdoor from "./app/screens/Outdoor"; 
import Checkout from "./app/screens/Checkout"; 


export default function App() {
  const MainNavigator = createStackNavigator();

  return (
    <View style={{flex: 1}}> 
      <NavigationContainer>
      <MainNavigator.Navigator screenOptions={{headerShown:false}} initialRouteName="Checkout">
      <MainNavigator.Screen name="Home" component={Home}/>
      <MainNavigator.Screen name="Login" component={Login}/>
      <MainNavigator.Screen name="Cart" component={Cart}/>
      <MainNavigator.Screen name="Classic" component={Classic}/>
      <MainNavigator.Screen name="Sports" component={Sports}/>
      <MainNavigator.Screen name="Outdoor" component={Outdoor}/>
      <MainNavigator.Screen name="Checkout" component={Checkout}/>

  </MainNavigator.Navigator>
      </NavigationContainer>
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
})

