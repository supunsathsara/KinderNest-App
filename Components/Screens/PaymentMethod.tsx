import React from 'react';
import { StyleSheet, Text, View, ImageBackground, Image, TouchableOpacity, TextInput } from 'react-native';
import axios from 'axios';

const PaymentMethod = ({ navigation }) => {
  const [studentNumber, setStudentNumber] = React.useState('');
  const [studentName, setStudentName] = React.useState('');
  const [parentPhoneNumber, setParentPhoneNumber] = React.useState('');

  const proceedHandle = () => {

    if (!studentName) {
      console.error("Please enter student number");
      return;
    }

    axios.post("http://192.168.1.10:3000/PaymentDetails", {
      id: studentNumber,
      name: studentName,
      mobile: parentPhoneNumber
    })
      .then(response => {

        console.log(response.data);

        navigation.navigate('Process');
      })
      .catch(error => {

        console.error('Error:', error);
      });
  }

  // const PayPalPayment = () =>{
  //   const createPayment = async () => {
  //       try {
  //           const response = await axios.post ("http://192.168.1.10:3000/paypal");
  //           const approvalURL = response.data.links.find(link => link.rel === "approval_url").href;
  //           console.log(approvalURL)
  //       } catch (error) {
  //           console.error ("Error creating Paypal payment:", error);
  //           Alert.alert('Error',)
  //       }
  //   }
  // } 

  return (
    <View style={styles.container}>
      <ImageBackground source={require('../images/Blank.png')} resizeMode="cover" style={styles.image}>
        <Text style={styles.textheading}>Make your class payments</Text>
        <Image style={styles.paymentlady} source={require("../images/paymentlady.png")} />
        <TextInput
          style={styles.input}
          placeholderTextColor={'black'}
          placeholder='Student Number'
          value={studentNumber}
          onChangeText={setStudentNumber}
        />
        <TextInput
          style={styles.input2}
          placeholderTextColor={'black'}
          placeholder='Student Name'
          value={studentName}
          onChangeText={setStudentName}
        />
        <TextInput
          style={styles.input3}
          placeholderTextColor={'black'}
          placeholder='Parent Phone Number'
          value={parentPhoneNumber}
          onChangeText={setParentPhoneNumber}
        />
        <TouchableOpacity onPress={proceedHandle} style={styles.button}>
          <Text style={{ fontSize: 20, padding: 10, textAlign: 'center', fontWeight: 'bold', color: 'white' }}>Proceed with PayPal</Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
}
export default PaymentMethod;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1
  },
  textheading: {
    fontSize: 26,
    color: 'black',
    marginTop: 40,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  input: {
    borderWidth: 1,
    width: 340,
    marginLeft: 22,
    borderRadius: 5,
    backgroundColor: '#B7ADAD',
    color: 'black',
    paddingLeft: 20,
    height: 40,
    marginBottom: 40,
    marginTop: 15,
  },
  input2: {
    borderWidth: 1,
    width: 340,
    marginLeft: 22,
    borderRadius: 5,
    backgroundColor: '#B7ADAD',
    color: 'black',
    paddingLeft: 20,
    height: 40,
    marginBottom: 40,
    marginTop: -10,
  },
  input3: {
    borderWidth: 1,
    width: 340,
    marginLeft: 22,
    borderRadius: 5,
    backgroundColor: '#B7ADAD',
    color: 'black',
    paddingLeft: 20,
    height: 40,
    marginBottom: 40,
    marginTop: -10,
  },
  paymentlady: {
    height: 250,
    width: 350,
    alignSelf: "center",
    marginTop: 10,
  },
  button: {
    backgroundColor: 'rgba(3, 138, 255, 1)',
    borderRadius: 50,
    width: 'auto',
    alignSelf: 'center',
  },
});

