import {
  View,
  Text,
  SafeAreaView,
  Image,
  TextInput,
  StyleSheet,
} from 'react-native';
import React from 'react';

const OnlineClassChild = () => {

  return (
    <SafeAreaView style={{ backgroundColor: '#AF9FB2'}}>
        <Text style={{
            fontSize:32,
            textAlign: 'center',
            marginTop:10
        }}> 
            online class
        </Text>
      <Image
        style={{width: 243, height: 270, alignSelf: 'center', marginTop: 60}}
        source={require('../images/OCchild.png')}
      />
      <View
        style={{
          alignSelf: 'center',
          marginTop: 20,
          backgroundColor: '#944CC0',
          borderRadius: 0,
          width: 345,
          height: 300,
          padding: 20,
          borderWidth: 1,
          borderColor: 'black',
        }}>
        <Text style={styles.text}>Session</Text>
        <TextInput />

        <Text style={styles.text}>Date</Text>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  text: {
    textAlign: 'center',
    marginTop: 5,
  },
});

export default OnlineClassChild;