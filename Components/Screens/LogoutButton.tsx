import { Alert, Button, StyleSheet, View } from "react-native";
import React, { useEffect, useState } from 'react';
import { supabase } from "../../lib/supabase";

import { Text } from "react-native-paper";
import { Session } from "@supabase/supabase-js";


const LogoutButton = ({ navigation }) => {
    const handleLogout = async () => {
        const { error } = await supabase.auth.signOut();
        if (error) {
          console.error('Logout error:', error.message);
          Alert.alert(error.message);
          // Handle logout error
        } else {
          console.log('User logged out successfully');
          navigation.navigate('Login');
          // Navigate to login screen or any other screen
        }
      };



      const [session, setSession] = useState<Session | null>(null)

      useEffect(() => {
        supabase.auth.getSession().then(({ data: { session } }) => {
          setSession(session)
        })
    
        supabase.auth.onAuthStateChange((_event, session) => {
          setSession(session)
        })
    
     
      }, [])


    return (
        <View style={styles.container}>
      {session?.user && (
        <View style={styles.userDetailsContainer}>
          <Text style={styles.text}>Name: {session?.user.user_metadata.parent_name || session?.user.user_metadata.teacher_name}</Text>
          <Text style={styles.text}>Email: {session?.user.user_metadata.email}</Text>
          <Text style={styles.text}>Role: {session?.user.user_metadata.role}</Text>
          <Text style={styles.text}>Kindergarten Level: {session?.user.user_metadata.kindergarten_level}</Text>
        </View>
      )}
      <Button title="Logout" onPress={handleLogout} />
    </View>
      );
  
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 20,
    },
    userDetailsContainer: {
      marginBottom: 20,
    },
    text: {
      fontSize: 18,
      marginBottom: 10,
    },
  });


export default LogoutButton;