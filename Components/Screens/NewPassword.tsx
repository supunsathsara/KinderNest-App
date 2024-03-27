import { StyleSheet, Text, View, TextInput, TouchableOpacity, ImageBackground } from 'react-native'
import React from 'react'

const NewPassword = () => {
  return (
    <View style={styles.container}>
        <ImageBackground source={require('../images/NewPW.png')} resizeMode="cover" style={styles.image}>
      <Text style={styles.textheading}>New password</Text>
      <Text style={styles.text}>New Password</Text>
      <TextInput style={styles.input}></TextInput>
      <Text style={styles.text}>Confirm Password</Text>
      <TextInput style={styles.input}></TextInput>
      <TouchableOpacity style={styles.button}><Text style={{fontSize:20, padding:10, textAlign:'center', fontWeight:'bold'}}>confirm</Text></TouchableOpacity>
      </ImageBackground>
      </View>
  )
}

export default NewPassword

const styles = StyleSheet.create({
    container : {
        flex:1,
    },
    image:{
        flex:1
    },
    textheading: {
        fontSize:26,
        marginLeft:30,
        color:'black',
        marginTop:140,
        marginBottom:60,
        textAlign:'center',
        fontWeight:'bold',
    },
    text: {
        color: 'black',
        fontSize: 16,
        textAlign: 'left',
        marginLeft: 30,
    },
    input: {
        borderColor: 'rgba(145, 0, 235, 1)',
        borderWidth: 1,
        width: 300,
        marginLeft: 30,
        borderRadius: 30,
        backgroundColor: 'white',
        color: 'black',
        paddingLeft: 20,
        height:40,
        marginBottom:40
    },
    button: {
        backgroundColor:'rgba(145, 0, 235, 1)',
        borderRadius:50,
        width:'auto',
        alignSelf:'center',
    },
})