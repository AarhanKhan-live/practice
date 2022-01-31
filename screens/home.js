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
const Home = ({navigation}) => {
    return (
      <SafeAreaView>
        <Button title="fetch" onPress={() => navigation.navigate('Data') }/>
      </SafeAreaView>
    );
  };
  
  const styles = StyleSheet.create({
    
  });
  
  export default Home;
  