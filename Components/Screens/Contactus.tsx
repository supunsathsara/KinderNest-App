import {View, Text, SafeAreaView, StyleSheet, TextInput, TouchableOpacity, Alert} from 'react-native';
import React, { useState } from 'react';
import axios from 'axios';


const Contactus = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSend = () => {
    axios.post(`${process.env.API_URL}/contactus`, { name, email, message })
      .then(response => {
        console.log(response.data); // Log the response from the backend
        Alert.alert('Message sent successfully');
      })
      .catch(error => {
        console.error('Error sending request:', error);
        Alert.alert('Failed to send message');
        // Handle error: show an error message to the user or retry sending
      });
  };

  return (
    <SafeAreaView style={{ backgroundColor: '#AF9FB2', flex: 1 }}>
      <Text style={{ fontSize: 20, marginLeft: 20, marginTop: 20, fontWeight: 'bold' }}>Contact Us</Text>
      <View style={{ marginTop: 0, marginHorizontal: 16, width: 328 }}>
        <Text style={{ marginHorizontal: 0, marginTop: 0, fontWeight: '300', textAlign: 'center', fontSize: 16, color: 'black', borderRadius: 5 }}>
          Feel free to contact us anything.{'\n'}
          We will get back to you as soon as we can!
        </Text>
      </View>

      <View style={{ alignSelf: 'center', marginTop: 20, backgroundColor: '#D7CFD9', borderRadius: 5, width: 345, height: 335, padding: 20, borderWidth: 1, borderColor: 'black' }}>
        <Text style={styles.text}>Name</Text>
        <TextInput style={styles.input} value={name} onChangeText={setName} />

        <Text style={styles.text}>Email</Text>
        <TextInput style={styles.input} value={email} onChangeText={setEmail} />

        <Text style={styles.text}>Message</Text>
        <TextInput style={styles.textInput} multiline={true} numberOfLines={4} value={message} onChangeText={setMessage} />

        <TouchableOpacity style={styles.button} onPress={handleSend}>
          <Text style={styles.buttonText}>Send</Text>
        </TouchableOpacity>
      </View>

      <View style={{ marginTop: 20, backgroundColor: '#837785', marginHorizontal: 16, borderRadius: 5, height: 280 }}>
        <Text style={{ fontSize: 20, marginLeft: 30, marginTop: 35, fontWeight: 'bold' }}>INFO</Text>
        <Text style={{ marginLeft: 30, marginTop: 10, fontSize: 16 }}>Email: kindernest.management@gmail.com</Text>
        <Text style={{ marginLeft: 30, marginTop: 10, fontSize: 16 }}>Tel: 123-456-789</Text>
      </View>
    </SafeAreaView>
  );
};

export default Contactus;

const styles = StyleSheet.create({
    text: {
      fontSize: 16,
      marginLeft: 10,
      marginTop: 10,
    },
    input: {
      borderColor: 'black',
      borderWidth: 1,
      borderRadius: 5,
      width: 254,
      height: 35,
      marginTop: 5,
      paddingLeft: 10,
      backgroundColor: '#D9D9D9',
      color: 'black', // <-- Change text color to black
    },
    textInput: {
      borderColor: 'black',
      borderWidth: 1,
      borderRadius: 5,
      width: 254,
      height: 100,
      marginTop: 5,
      
      backgroundColor: '#D9D9D9',
      paddingLeft: 10,
      paddingTop: 5,
      color: 'black', // <-- Change text color to black
    },
    button: {
      alignSelf: 'center',
      marginTop: 20,
      backgroundColor: '#837785',
      borderRadius: 5,
      width: 109,
      height: 39,
      justifyContent: 'center',
    },
    buttonText: {
      textAlign: 'center',
      fontSize: 16,
      color: 'white',
    },
    
});