import {
  View,
  Text,
  SafeAreaView,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

const OnlineClassTeacher = () => {



  
  return (
    <SafeAreaView style={{}}>
           <Text style={{
            fontSize:30,
            textAlign:'center',
            backgroundColor: '#AF9FB2'
        }}> 
            online class
        </Text>
   
      <Image
        style={{width: 209, height: 229, alignSelf: 'center', marginTop: 13}}
        source={require('../images/OCteacher.png')}
      />
      <View
        style={{
          alignSelf: 'center',
          marginTop: 20,
          backgroundColor: '#944CC0',
          borderRadius: 5,
          width: 345,
          height: 363,
          padding: 20,
          borderWidth: 1,
          borderColor: 'black',
        }}>
        <Text style={styles.text}>Session</Text>
        <TextInput style={styles.input} />

        <Text style={styles.text}>Date</Text>
        <TextInput style={styles.input} />

        <Text style={styles.text}>Time</Text>
        <TextInput style={styles.input} />

        <Text style={styles.text}>
          Put the required link for online class here
        </Text>
        <TextInput style={styles.input} />
      </View>

      <TouchableOpacity
        style={{
          alignSelf: 'center',
          marginTop: 20,
          backgroundColor: '#944CC0',
          borderRadius: 5,
          width: 109,
          height: 39,
        }}>
        <Text style={{textAlign: 'center', fontSize: 16, marginTop: 8}}>
          send
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default OnlineClassTeacher;

const styles = StyleSheet.create({
  text: {
    textAlign: 'center',
    marginTop: 5,
  },
  input: {
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 5,
    width: 254,
    height: 50,
    marginTop: 5,
    alignSelf: 'center',
    backgroundColor: '#F0D9F5',
  },
});