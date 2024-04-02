import {
    View,
    Text,
    Image,
    SafeAreaView,
    StyleSheet,
    TextInput,
    TouchableOpacity,
  } from 'react-native';
  import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { supabase } from '../../lib/supabase';
import { Session } from '@supabase/supabase-js';
  
// Define an interface for the progress data
interface ProgressData {
  _id: string;
  student: string;
  subjects: { name: string; grade: string; }[];
  remark: string;
  month: string;
  created: string;
  __v: number;
}

  const ProgressParent = () => {

    const [session, setSession] = useState<Session | null>(null)

    useEffect(() => {
        supabase.auth.getSession().then(({ data: { session } }) => {
          setSession(session)
        })
    
        supabase.auth.onAuthStateChange((_event, session) => {
          setSession(session)
        })
    
     
      }, [])

    const [progress, setProgress] = useState<ProgressData | null>(null);

    useEffect(() => {
      const fetchProgress = async () => {
        try {
          const response = await axios.get(`${process.env.API_URL}/progress/${session?.user.email}`);
          console.log('Progress data:', response.data);
          setProgress(response.data);
        } catch (error) {
          console.error('Error fetching progress:', error);
        }
      };
  
      fetchProgress();
    }, [session]);

    return (
      <SafeAreaView style={styles.container}>
        <View>
          <Image
            style={{width: 393, height: 80}}
            source={require('../images/prog.png')}
          />
  
          <Text
            style={{
              textAlign: 'center',
              fontSize: 30,
              marginTop: 0,
              fontWeight: '500',
            }}>
            Progress
          </Text>
  
          <View>
            <Text style={styles.text1} >
              {progress && progress.month}
            </Text>
          </View>
  
          {/* UpGrading  */}
  
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            {/* Subjects */}
            <View>
              <View>
                <Text
                  style={{
                    fontSize: 16,
                    textAlign: 'center',
                    marginLeft: 35,
                    backgroundColor: '#C19DC9',
                    borderRadius: 5,
                    width: 100,
                    height: 30,
                    borderWidth: 1,
                    borderColor: 'black',
                    marginTop: 15,
                  }}>
                  Learning
                </Text>
  
                {progress &&
                progress.subjects.map((subject, index) => (
                  <Text key={index} style={styles.inputSub} >
                    {subject.name}
                  </Text>
                ))}
              </View>
            </View>
  
            {/* Grades */}
            <View>
              <View>
                <Text
                  style={{
                    fontSize: 16,
                    textAlign: 'center',
                    marginLeft: 20,
                    backgroundColor: '#C19DC9',
                    borderRadius: 5,
                    width: 140,
                    height: 30,
                    borderWidth: 1,
                    borderColor: 'black',
                    marginTop: 15,
                    marginRight: 25,
                  }}>
                  Quarterly Grade
                </Text>
                {progress &&
                progress.subjects.map((subject, index) => (
                  <Text key={index} style={styles.inputSub}>
                    {subject.grade}
                  </Text>
                ))}
  
              </View>
            </View>
          </View>
  
          <TouchableOpacity>
          <Text
            style={{
              textAlign: 'center',
              marginTop: 15,
              fontSize: 16,
              marginLeft: 30,
              backgroundColor: '#C19DC9',
              borderRadius: 5,
              width: 196,
              height: 30,
              borderWidth: 1,
              borderColor: 'black',
              alignSelf: 'center',
            }}>
            {progress && progress.remark}
          </Text>
          </TouchableOpacity>
  
          <Image
            style={{width: 180, height: 220, alignSelf: 'center', marginTop: 13}}
            source={require('../images/prog.Teacher.png')}
          />
        </View>
      </SafeAreaView>
    );
  };
  
  export default ProgressParent;
  
  const styles = StyleSheet.create({
    container: {
      backgroundColor: '#AF9FB2',
    },
    text1: {
      borderColor: 'black',
      borderWidth: 1,
      borderRadius: 5,
      width: 135,
      height: 32,
      marginTop: 10,
      alignSelf: 'center',
      backgroundColor: '#C19DC9',
      textAlign: 'center',
      justifyContent: 'center',
      alignItems: 'center',


    },
    inputSub: {
      borderColor: 'black',
      borderWidth: 1,
      borderRadius: 5,
      width: 135,
      height: 32,
      marginTop: 3,
      alignSelf: 'center',
      backgroundColor: '#A69097',
      textAlign: 'center',
      justifyContent: 'center',
      alignItems: 'center',
    },
  
    inputGrade: {
      borderColor: 'black',
      borderWidth: 1,
      borderRadius: 5,
      width: 135,
      height: 32,
      marginTop: 3,
      alignSelf: 'center',
      backgroundColor: '#A69097',
      textAlign: 'center',
      justifyContent: 'center',
      alignItems: 'center',

    },
    inputRemark: {
      borderColor: 'black',
      borderWidth: 1,
      borderRadius: 5,
      width: 287,
      height: 186,
      marginTop: 5,
      alignSelf: 'center',
      backgroundColor: '#A69097',
    },
  });