import React, { useEffect, useState } from 'react';
import {
  Button,
  Pressable,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  Image,
  useColorScheme,
  View,
} from 'react-native';
const Data = () => {

    const[data,setData] = useState('');
  
    useEffect(()=>{
      fetching();
    },[])
  
    const fetching = () => {
      fetch(`https://dog.ceo/api/breeds/image/random`)
      .then(response => response.json())
      .then(data => setData(data))
      .catch((error) => console.log(error))
    }
    return (
      <SafeAreaView>
        <Image source={{ uri: data.message,}} style={{height:100,width:100}} />
        <Text>{data.status}</Text>
      </SafeAreaView>
    );
  };
  
  const styles = StyleSheet.create({
    
  });
  
  export default Data;
  