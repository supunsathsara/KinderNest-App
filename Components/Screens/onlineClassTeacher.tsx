import {
  View,
  Text,
  SafeAreaView,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
  ScrollView,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Session } from '@supabase/supabase-js';
import { supabase } from '../../lib/supabase';

const OnlineClassTeacher = () => {

  const [classSession, setClassSession] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [classSubject, setClassSubject] = useState('');
  const [teacherName, setTeacherName] = useState('');

  const [session, setSession] = useState<Session | null>(null)

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
    })

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })


  }, [])

  const handleSubmit = async () => {

    let { data: classes, error } = await supabase
      .from('classes')
      .select('name')
      .eq('teacher', session?.user.id)

    if (error) {
      console.error('Error fetching classes:', error.message);
      Alert.alert(error.message);
      return;
    }
    if (classes && classes.length > 0) {
      console.log(classes[0].name)
      console.log(session?.user.user_metadata.teacher_name)

    // Define the request body
    const requestBody = {
      session: classSession,
      date: date,
      time: time,
      class: classes[0].name,
      teacher: session?.user.user_metadata.teacher_name
    };

    // Send POST request using Axios
    axios.post(`${process.env.API_URL}/classes`, requestBody)
      .then(response => {
        // Handle successful response
        console.log('Request sent successfully:', response.data);
        Alert.alert('Class Added Successfully');
        // You can do something after successfully sending the request, like showing a confirmation message
      })
      .catch(error => {
        // Handle error
        console.error('Error sending request:', error);
        // You can display an error message to the user or handle the error in another way
      });
    }
  };


  return (
    <SafeAreaView style={{}}>
       <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <Text style={{
        fontSize: 30,
        textAlign: 'center',
        backgroundColor: '#AF9FB2'
      }}>
        online class
      </Text>

      <Image
        style={{ width: 209, height: 229, alignSelf: 'center', marginTop: 13 }}
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
        <Text style={styles.text}>Link</Text>
        <TextInput
          style={styles.input}
          value={classSession}
          onChangeText={text => setClassSession(text)}
        />

        <Text style={styles.text}>Date</Text>
        <TextInput
          style={styles.input}
          value={date}
          onChangeText={text => setDate(text)}
        />

        <Text style={styles.text}>Time</Text>
        <TextInput
          style={styles.input}
          value={time}
          onChangeText={text => setTime(text)}
        />


      </View>

      <TouchableOpacity
        style={{
          alignSelf: 'center',
          marginTop: 20,
          backgroundColor: '#944CC0',
          borderRadius: 5,
          width: 109,
          height: 39,
        }}
        onPress={handleSubmit}>
        <Text style={{ textAlign: 'center', fontSize: 16, marginTop: 8 }}>
          Send
        </Text>
      </TouchableOpacity>
      </ScrollView>
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