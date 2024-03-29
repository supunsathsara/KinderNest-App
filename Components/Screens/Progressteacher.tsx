import {
    View,
    Text,
    Image,
    SafeAreaView,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    Alert,
  } from 'react-native';
  import React, { useState } from 'react';
import axios from 'axios';
import { set } from 'react-native-reanimated';
  
  const ProgressTeacher = () => {
    const [student, setStudent] = useState('');
const [month, setMonth] = useState('');
const [subjects, setSubjects] = useState([
    { name: '', grade: 'A' }, // Initialize grade with a default value, such as 'A'
    { name: '', grade: 'A' },
    { name: '', grade: 'A' },
    { name: '', grade: 'A' },
    { name: '', grade: 'A' }
]);
const [remark, setRemark] = useState('');

const handleSend = () => {
  // Create the payload to send to the backend
  const payload = {
    month: month,
    student: student,
    subjects: subjects.filter(sub => sub.name && sub.grade),
    remark: remark
  };


  console.log("payload",payload)
  // Send the payload to the backend using Axios
  axios.post(`${process.env.API_URL}/progress`, payload)
    .then(response => {
      // Handle success
      console.log('Progress data sent successfully:', response.data);
      Alert.alert('Progress data sent successfully');
      setStudent('');
    })
    .catch(error => {
      // Handle error
      console.error('Error sending progress data:', error);
      Alert.alert('Error sending progress data');
    });
};

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
            <Text style={{textAlign: 'center', marginTop: 3, fontSize: 20}}>
              Add Student
            </Text>
            <TextInput style={styles.input} value={student}
            onChangeText={setStudent} />
            <Text style={{textAlign: 'center', marginTop: 3, fontSize: 20}}>
              Add month
            </Text>
            <TextInput style={styles.input} 
            value={month}
            onChangeText={setMonth}  
            />

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
                    marginLeft: 30,
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
  
                <TextInput style={styles.inputSub}
                value={subjects[0].name}
                onChangeText={text => {
                    const newSubjects = [...subjects];
                    newSubjects[0].name = text;
                    setSubjects(newSubjects);
                }}
                />
  
                <TextInput style={styles.inputSub}
                value={subjects[1].name}
                onChangeText={text => {
                    const newSubjects = [...subjects];
                    newSubjects[1].name = text;
                    setSubjects(newSubjects);
                }}  
                />
  
                <TextInput style={styles.inputSub} 
                value={subjects[2].name}
                onChangeText={text => {
                    const newSubjects = [...subjects];
                    newSubjects[2].name = text;
                    setSubjects(newSubjects);
                }}
                />
  
                <TextInput style={styles.inputSub} 
                value={subjects[3].name}
                onChangeText={text => {
                    const newSubjects = [...subjects];
                    newSubjects[3].name = text;
                    setSubjects(newSubjects);
                }}
                />
  
                <TextInput style={styles.inputSub} 
                value={subjects[4].name}
                onChangeText={text => {
                    const newSubjects = [...subjects];
                    newSubjects[4].name = text;
                    setSubjects(newSubjects);
                }}
                
                />

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
                    marginRight: 20,
                  }}>
                  Quarterly Grade
                </Text>
  
                <TextInput style={styles.inputGrade} 
                value={subjects[0].grade}
                onChangeText={text => {
                    const newSubjects = [...subjects];
                    newSubjects[0].grade = text;
                    setSubjects(newSubjects);
                }}
                />
  
                <TextInput style={styles.inputGrade} 
                value={subjects[1].grade}
                onChangeText={text => {
                    const newSubjects = [...subjects];
                    newSubjects[1].grade = text;
                    setSubjects(newSubjects);
                }}
                />
  
                <TextInput style={styles.inputGrade} 
                value={subjects[2].grade}
                onChangeText={text => {
                    const newSubjects = [...subjects];
                    newSubjects[2].grade = text;
                    setSubjects(newSubjects);
                }}
                />
  
                <TextInput style={styles.inputGrade} 
                value={subjects[3].grade}
                onChangeText={text => {
                    const newSubjects = [...subjects];
                    newSubjects[3].grade = text;
                    setSubjects(newSubjects);
                }}
                
                />
  
                <TextInput style={styles.inputGrade} 
                value={subjects[4].grade}
                onChangeText={text => {
                    const newSubjects = [...subjects];
                    newSubjects[4].grade = text;
                    setSubjects(newSubjects);
                }}
                />
  
              </View>
            </View>
          </View>
  
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
            Feadback & Remark
          </Text>
  
          <View style={{ }}>
          <TextInput style={styles.inputRemark}
          value={remark}
          onChangeText={setRemark}
          >
          </TextInput>
           </View>
  
           <TouchableOpacity
          style={{
            alignSelf: 'center',
            marginTop: 10,
            backgroundColor: '#944CC0',
            borderRadius: 5,
            width: 93,
            height: 30,
          }}>
          <Text style={{textAlign: 'center', fontSize: 16, marginTop:8,alignSelf:'center'}}
          onPress={handleSend}
          >
            SEND
          </Text>
        </TouchableOpacity>
  
        </View>
      </SafeAreaView>
    );
  };
  
  export default ProgressTeacher;
  
  const styles = StyleSheet.create({
    container: {
      backgroundColor: '#AF9FB2',
    },
    input: {
      borderColor: 'black',
      borderWidth: 1,
      borderRadius: 5,
      width: 135,
      height: 32,
      marginTop: 3,
      alignSelf: 'center',
      backgroundColor: '#C19DC9',
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
      marginLeft: 20,
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