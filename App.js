/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
 import React, { useState } from 'react';
 import {
   Button,
   Pressable,
   SafeAreaView,
   ScrollView,
   StatusBar,
   StyleSheet,
   Text,
   useColorScheme,
   View,
 } from 'react-native';
 import { NavigationContainer } from '@react-navigation/native';
 import { createStackNavigator } from '@react-navigation/stack';
 import Home from './screens/home';
 import Data from './screens/data';
 
 const Stack = createStackNavigator();
 const App = () => {
   return (
     <NavigationContainer>
       <Stack.Navigator initialRouteName="Login">
       <Stack.Screen name={'Home'} component={Home}  />
       <Stack.Screen name={'Data'} component={Data}  />
       </Stack.Navigator>
     </NavigationContainer>
   );
 };
 
 const styles = StyleSheet.create({
   
 });
 
 export default App;
 