import React, { useState } from 'react'
import { useFocusEffect } from '@react-navigation/native';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Alert, BackHandler } from 'react-native'
import { supabase } from '../../lib/supabase';

const Login = ({ navigation }) => {
  useFocusEffect(
    React.useCallback(() => {
      const onBackPress = () => {
        Alert.alert('', 'Are you sure want to quit ?', [
          {
            text: 'Cancel',
            onPress: () => null,
          },
          {
            text: 'Yes',
            onPress: () => BackHandler.exitApp(),
          }
        ]);
        return true;
      };
      // Add event listner to hardware back press
      BackHandler.addEventListener('hardwareBackPress', onBackPress);
      return () => {
        // once the screen gets blur remove event listner
        BackHandler.removeEventListener('hardwareBackPress', onBackPress);
      };
    }
      , []),
  );

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  async function signInWithEmail() {

    //Alert.alert(email)
    const { error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    })

    //navigation.navigate('PHome')

    if (error) Alert.alert(error.message)

    if (!error) navigation.navigate('PHome');

  }
  return (
    <View style={styles.container}>
      <View>
        <Image style={styles.bbyimage} source={require("../images/bby2.png")}></Image>
        <Text style={styles.text}>Welcome to</Text>
        <Text style={styles.text1}>KinderNest</Text>
        <Text style={styles.text2}>~ Streamline KMS for teachers & parents ~</Text>
      </View>
      <View style={{ marginTop: 20 }}>
        <TextInput style={styles.input} placeholderTextColor={'black'} placeholder='Email' onChangeText={(text) => setEmail(text)}></TextInput>
        <TextInput secureTextEntry style={styles.input} placeholderTextColor={'black'} placeholder='Password' onChangeText={(text) => setPassword(text)}></TextInput>
        <TouchableOpacity onPress={() => signInWithEmail()} style={styles.button}><Text style={{ fontSize: 20, padding: 10, textAlign: 'center', fontWeight: 'bold' }}>Login</Text></TouchableOpacity>
      </View>
      <View style={{ marginTop: 20, alignItems: 'center' }}>
        <TouchableOpacity onPress={() => navigation.navigate('FPassword')}><Text style={{ fontSize: 20, padding: 5, textAlign: 'center', fontWeight: 'bold' }}>Forgot Password</Text></TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Pregister')} style={styles.button}><Text style={{ fontSize: 20, padding: 10, textAlign: 'center', fontWeight: 'bold', }}>Signup</Text></TouchableOpacity>
        <TouchableOpacity><Text style={{ fontSize: 15, padding: 5, textAlign: 'center', fontWeight: 'bold',color: 'black', }}>Don't have an account</Text></TouchableOpacity>
      </View>
    </View>
  )
}

export default Login

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(168, 159, 178, 1)"
  },
  text: {
    color: 'black',
    fontSize: 26,
    lineHeight: 50,
    textAlign: 'center',
  },
  text1: {
    color: 'rgba(145, 0, 235, 1)',
    fontSize: 36,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  text2: {
    color: 'black',
    fontSize: 16,
    textAlign: 'center',
  },
  bbyimage: {
    height: 250,
    width: 150,
    alignSelf: "center",
    marginTop: 60
  },
  input: {
    borderColor: 'rgba(145, 0, 235, 1)',
    borderWidth: 1,
    width: 300,
    alignSelf: 'center',
    borderRadius: 30,
    backgroundColor: 'white',
    color: 'black',
    paddingLeft: 20,
    marginBottom: 10
  },
  button: {
    backgroundColor: 'rgba(145, 0, 235, 1)',
    borderRadius: 50,
    width: 'auto',
    alignSelf: 'center',
  },
})