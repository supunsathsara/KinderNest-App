import { View, Text, SafeAreaView, Image, TextInput, StyleSheet, Alert, TouchableOpacity, Linking, ScrollView } from 'react-native';
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
        const response = await axios.get(`${process.env.API_URL}/classes/${session?.user.user_metadata.class}`);
        console.log(response.data.data)
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

  const handleLinkPress = (url: string) => {
    Linking.openURL(url);
  };

  return (
    <SafeAreaView style={styles.container}>
       <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <Text style={styles.heading}>Online Class</Text>
      <Image
        style={styles.image}
        source={require('../images/OCchild.png')}
      />
      <View style={styles.classContainer}>
        {classes.map((classItem, index) => (
          <TouchableOpacity key={index} style={styles.classItem} onPress={() => handleLinkPress(classItem.session)}>
            <Text style={styles.classText}>Link: {classItem.session || ""}</Text>
            <Text style={styles.classText}>Date: {formatDate(classItem.date)}</Text>
            <Text style={styles.classText}>Time: {classItem.time || ""}</Text>
          </TouchableOpacity>
        ))}
      </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#AF9FB2',
    alignItems: 'center',
  },
  heading: {
    fontSize: 32,
    textAlign: 'center',
    marginTop: 10,
  },
  image: {
    width: 243,
    height: 270,
    alignSelf: 'center',
    marginTop: 60,
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
    borderBottomWidth: 1,
    borderBottomColor: 'white',
    paddingBottom: 10,
  },
  classText: {
    fontSize: 16,
    marginBottom: 5,
    color: 'white',
  },
});

export default OnlineClassChild;
