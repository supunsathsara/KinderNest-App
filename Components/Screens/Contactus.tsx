import {View, Text, SafeAreaView, StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import React from 'react';

const Contactus = () => {
  return (
    <SafeAreaView style={{backgroundColor: '#AF9FB2'}}>
      <Text
        style={{
          fontSize: 20,
          marginLeft: 20,
          marginTop: 20,
          fontWeight: 'bold',
        }}>
        Contact Us
      </Text>
      <View
        style={{
          marginTop: 0,
          marginHorizontal: 16,
          width: 328,
        }}>
        <Text
          style={{
            marginHorizontal: 0,
            marginTop: 0,
            fontWeight: '300',
            textAlign: 'center',
            fontSize: 16,
            color: 'black',
            borderRadius: 5,
          }}>
          Feel free to contact us anything.{'\n'}
          We will get back to you as soon as we can!
        </Text>
      </View>

      <View
        style={{
          alignSelf: 'center',
          marginTop: 20,
          backgroundColor: '#D7CFD9',
          borderRadius: 5,
          width: 345,
          height: 335,
          padding: 20,
          borderWidth: 1,
          borderColor: 'black',
        }}>
        <Text style={styles.text}>Name</Text>
        <TextInput style={styles.input} />

        <Text style={styles.text}>Email</Text>
        <TextInput style={styles.input} />

        <Text style={styles.text}>Massage</Text>
        <TextInput
          style={{
            borderColor: 'black',
            borderWidth: 1,
            borderRadius: 5,
            width: 254,
            height: 100,
            marginTop: 5,
            alignSelf: 'center',
            backgroundColor: '#D9D9D9',
          }}
        />

        <TouchableOpacity
          style={{
            alignSelf: 'center',
            marginTop: 20,
            backgroundColor: '#837785',
            borderRadius: 5,
            width: 109,
            height: 39,
          }}>
          <Text style={{
            textAlign: 'center',
             fontSize: 16,
              marginTop: 8
              }}>
            send
          </Text>
        </TouchableOpacity>
      </View>

      <View style={{
          marginTop: 20, 
          backgroundColor: '#837785',
          marginHorizontal: 16,
          borderRadius: 5,
          height: 280,
          }}>

        <Text style={{
            fontSize: 20,
            marginLeft: 30,
            marginTop: 35,
            fontWeight: 'bold',
        }}> 
            INFO
        </Text>

        <Text style={{
            marginLeft: 30,
            marginTop: 10,
            fontSize: 16,
        }}>
        Email: kindernest.management@gmail.com
        </Text>

        <Text style={{
            marginLeft: 30,
            marginTop: 10,
            fontSize: 16,
        }}>
            Tel: 123-456-789
        </Text>
      </View>

      {/* <View style={{
        backgroundColor:'#D9D9D9',
        height:100
      }}>
        
      </View> */}
    </SafeAreaView>
    
  );
};

export default Contactus;

const styles = StyleSheet.create({
  text: {
    marginLeft: 10,
    marginTop: 5,
  },
  input: {
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 5,
    width: 254,
    height: 10,
    marginTop: 5,
    alignSelf: 'center',
    backgroundColor: '#D9D9D9',
  },
});