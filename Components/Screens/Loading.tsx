import React from 'react';
import {ImageBackground, StyleSheet, Text, View, Image} from 'react-native';
import { ActivityIndicator } from 'react-native';

const Loading = ({navigation}) => {
  setTimeout(() => {
    navigation.navigate('Login');
  },2000)
  return (
  <View style={styles.container}>
    <ImageBackground source={require('../images/backgrount.jpg')} resizeMode="cover" style={styles.image}>
    <View>
      <Image style={styles.bbyimage} source={require("../images/bby1.png")}></Image>
      <Text style={styles.text}>KinderNest</Text>
    </View>
    <View>
    <ActivityIndicator style={styles.load} size="large" color='rgba(145, 0, 235, 1)' />
    </View>
    </ImageBackground>
  </View>
)};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
  },
  text: {
    color: 'rgba(145, 0, 235, 1)',
    fontSize: 42,
    lineHeight: 84,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  bbyimage:{
    height:220,
    width:350,
    alignSelf:"center",
    marginTop:150
  },
  load:{
    height:200,
    width:50,
    alignSelf:"center",
    marginTop:190
  }
});

export default Loading;