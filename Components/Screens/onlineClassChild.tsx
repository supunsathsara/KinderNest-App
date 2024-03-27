import {
  View,
  Text,
  SafeAreaView,
  Image,
  TextInput,
  StyleSheet,
  Alert,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { supabase } from '../../lib/supabase';
import { Session } from '@supabase/supabase-js';

const OnlineClassChild = () => {

  const [session, setSession] = useState<Session | null>(null)

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
    })

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })


  }, [])

  const [classes, setClasses] = useState<any[]>([]);

  useEffect(() => {
    const fetchClasses = async () => {
      try {
        const response = await axios.get(process.env.API_URL +'/classes/'+session?.user.user_metadata.class);
        setClasses(response.data.data); 
      } catch (error) {
        console.error('Error fetching classes:', error);
        Alert.alert('Error fetching classes');
      }
    };

    fetchClasses();
  }, [session]);

  const formatDate = (dateString:any) => {
    const date = new Date(dateString);
    return date.toLocaleDateString(); // Format the date according to the user's locale
  };

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
        {classes.map((classItem, index) => (
          <View key={index} style={styles.classItem}>
            <Text style={styles.classText}>Link: {classItem.session || ""}</Text>
            <Text style={styles.classText}>Date: {formatDate(classItem.date)}</Text>
            <Text style={styles.classText}>Time: {classItem.time || ""}</Text>
          </View>
        ))}
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  text: {
    textAlign: 'center',
    marginTop: 5,
  },
  classContainer: {
    alignSelf: 'center',
    marginTop: 20,
    backgroundColor: '#944CC0',
    borderRadius: 0,
    width: 345,
    padding: 20,
  },
  classItem: {
    marginBottom: 10,
  },
  classText: {
    fontSize: 16,
    marginBottom: 5,
  },
});

export default OnlineClassChild;