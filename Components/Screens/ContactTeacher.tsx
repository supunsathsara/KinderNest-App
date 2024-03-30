import React, { useEffect, useState } from 'react';
import { View, TextInput, Button, StyleSheet, Alert } from 'react-native';
import axios from 'axios';
import { Session } from '@supabase/supabase-js';
import { supabase } from '../../lib/supabase';

const ContactTeacher = () => {
    const [teacherEmail, setTeacherEmail] = useState('');
    const [session, setSession] = useState<Session | null>(null);
    const [text, setText] = useState('');
  
    useEffect(() => {
      // Function to fetch the teacher's email
      const fetchTeacherEmail = async (className:String) => {
        const { data, error } = await supabase
          .from('view_teacher_emails')
          .select('teacher_email')
          .eq('class_name', className)
          .single(); // Using .single() assuming class names are unique
  
        if (error) {
          console.error('Error fetching teacher email:', error);
        } else if (data) {
          setTeacherEmail(data.teacher_email);
        }
      };
  
      supabase.auth.getSession().then(({ data: { session } }) => {
        setSession(session);
        if (session?.user?.user_metadata?.class) {
          fetchTeacherEmail(session.user.user_metadata.class);
        }
      });
  
      supabase.auth.onAuthStateChange((_event, session) => {
        setSession(session);
        if (session?.user?.user_metadata?.class) {
          fetchTeacherEmail(session.user.user_metadata.class);
        }
      });
    }, []);



  const sendEmail = () => {
    const apiUrl = process.env.API_URL;
    const data = {
      to: teacherEmail, 
      replyTo: session?.user.email, 
      text: text, 
    };

    axios.post(`${apiUrl}/mailTeacher`, data)
      .then(response => {
        Alert.alert("Success", "Email sent successfully");
      })
      .catch(error => {
        console.error('There was an error!', error);
        Alert.alert("Error", "Failed to send email");
      });
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={setText}
        value={text}
        placeholder="Enter your message here"
        multiline
      />
      <Button
        title="Send Email"
        onPress={sendEmail}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  input: {
    height: 100,
    marginBottom: 20,
    borderWidth: 1,
    padding: 10,
  },
});

export default ContactTeacher;
