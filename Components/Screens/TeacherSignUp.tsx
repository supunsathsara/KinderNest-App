import { StyleSheet, Text, View, TextInput, TouchableOpacity, ImageBackground, Alert } from 'react-native'
import React, { useState } from 'react'
import { supabase } from '../../lib/supabase';

const TeacherSignUp = ({ navigation }) => {
    const [teacherName, setTeacherName] = useState('');
    const [kindergartenLevel, setKindergartenLevel] = useState('');
    const [gender, setGender] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
  
    const handleSignUp = async () => {
      
      if (password !== confirmPassword) {
        Alert.alert("Passwords do not match")
        return;
    }

    const { data, error } = await supabase.auth.signUp(
        {
            email: email,
            password:  password,
            options: {
                data: {
                    role: 'teacher',
                    teacher_name: teacherName,
                    kindergarten_level: kindergartenLevel,
                    gender: gender
                }
            }
        }
    )

    if (error) {
        Alert.alert(error.message)
    }
    if (!error) {
        navigation.navigate('PHome')
    }
    };
  
    return (
      <View style={styles.container}>   
        <ImageBackground source={require('../images/SUPTE.png')} resizeMode="cover" style={styles.image}>
          <Text style={styles.textheading}>Sign Up</Text>
          <Text style={styles.text}>Teachers Name</Text>
          <TextInput
            style={styles.input}
            value={teacherName}
            onChangeText={setTeacherName}
          />
          <Text style={styles.text}>Kindergarten Level</Text>
          <TextInput
            style={styles.input}
            value={kindergartenLevel}
            onChangeText={setKindergartenLevel}
          />
          <Text style={styles.text}>Gender</Text>
          <TextInput
            style={styles.input}
            value={gender}
            onChangeText={setGender}
          />
          <Text style={styles.text}>Email</Text>
          <TextInput
            style={styles.input}
            value={email}
            onChangeText={setEmail}
          />
          <Text style={styles.text}>Password</Text>
          <TextInput
            style={styles.input}
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
          <Text style={styles.text}>Confirm Password</Text> 
          <TextInput
            style={styles.input}
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            secureTextEntry
          />
          <TouchableOpacity style={styles.button} onPress={handleSignUp}>
            <Text style={{fontSize:20, padding:10, textAlign:'center', fontWeight:'bold'}}>Signup</Text>
          </TouchableOpacity>
        </ImageBackground>
      </View>
    );
  };

export default TeacherSignUp

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    image:{
        flex:1
    },
    textheading: {
        fontSize:26,
        marginLeft:30,
        color:'black',
        marginTop:120,
        marginBottom:20
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
        marginBottom: 10,
        height:40
    },
    button: {
        backgroundColor:'rgba(145, 0, 235, 1)',
        borderRadius:50,
        width:'auto',
        alignSelf:'center',
    },
})